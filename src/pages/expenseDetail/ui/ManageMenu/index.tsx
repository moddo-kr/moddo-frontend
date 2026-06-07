import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { Dimmed, Dialog, Modal, showToast } from '@/shared/design-system/ui';
import payment from '@/entities/payment/api/payment';
import usePutUpdateAccount from '@/features/expense-management/api/usePutUpdateAccount';
import { ROUTE } from '@/shared/config/route';
import { BoundaryError } from '@/shared/types/error.type';
import { AccountEditDialog } from '@/_workspace/AccountEditDialog';
import BANK_LIST from '@/pages/addAccountStep/ui/BankNameDrawer/config/banks';
import * as S from './index.styles';

const BANK_OPTIONS = BANK_LIST.map((bank) => ({
  label: bank.bankName,
  value: bank.bankName,
}));

interface ManageMenuProps {
  groupToken: string;
}

function ManageMenu({ groupToken }: ManageMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlockedModalOpen, setIsBlockedModalOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isAccountEditOpen, setIsAccountEditOpen] = useState(false);
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateAccountMutate } = usePutUpdateAccount(
    groupToken,
    {
      // CHECK - 문서에는 403 에러로 되어 있지만, 실제로는 500 에러가 발생함
      // 유저가 모임 총무가 아닐 경우에 발생하는 에러
      403: () => {
        throw new BoundaryError({
          title: '접근 권한이 없어요.',
          description: '계좌는 총무만 수정할 수 있어요.',
        });
      },
    },
    [403]
  );

  const handleEditExpenses = async () => {
    setIsOpen(false);
    setIsPending(true);
    try {
      const { exists } = await payment.exists(groupToken);
      if (exists) {
        setIsBlockedModalOpen(true);
      } else {
        navigate(ROUTE.editExpenses.replace(':groupToken', groupToken));
      }
    } catch {
      showToast({
        type: 'error',
        content: '일시적인 오류가 발생했어요. 다시 시도해 주세요.',
      });
    } finally {
      setIsPending(false);
    }
  };

  const handleOpenAccountEdit = () => {
    setIsOpen(false);
    setIsAccountEditOpen(true);
  };

  const handleAccountEditConfirm = () => {
    updateAccountMutate(
      {
        accountData: { bank: bankName, accountNumber },
        groupToken,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['groupHeader', groupToken],
          });
          showToast({ type: 'success', content: '계좌를 수정했어요.' });
          setIsAccountEditOpen(false);
        },
      }
    );
  };

  return (
    <>
      <S.TriggerButton onClick={() => setIsOpen(true)} disabled={isPending}>
        관리
      </S.TriggerButton>
      {isOpen &&
        createPortal(
          <>
            <Dimmed onClick={() => setIsOpen(false)} />
            <S.MenuCard>
              <S.MenuItemButton onClick={handleEditExpenses}>
                정산 내역 수정
              </S.MenuItemButton>
              <S.MenuItemButton onClick={handleOpenAccountEdit}>
                계좌 수정
              </S.MenuItemButton>
            </S.MenuCard>
          </>,
          document.querySelector('#modal') ?? document.body
        )}
      <AccountEditDialog
        open={isAccountEditOpen}
        bankOptions={BANK_OPTIONS}
        bankValue={bankName}
        onBankChange={setBankName}
        accountNumber={accountNumber}
        onAccountNumberChange={(e) => setAccountNumber(e.target.value)}
        onCancel={() => setIsAccountEditOpen(false)}
        onConfirm={handleAccountEditConfirm}
      />
      <Modal
        open={isBlockedModalOpen}
        onClose={() => setIsBlockedModalOpen(false)}
        ariaLabel="정산 내역을 수정할 수 없어요"
      >
        <Dialog
          title="정산 내역을 수정할 수 없어요"
          description={`이미 정산을 완료한 참여자가 있어\n정산 내역을 수정할 수 없어요.`}
          mainAction={{
            label: '확인',
            onClick: () => setIsBlockedModalOpen(false),
          }}
        />
      </Modal>
    </>
  );
}

export default ManageMenu;
