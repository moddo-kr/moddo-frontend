import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router';
import { Dimmed, Dialog, Modal, showToast } from '@/shared/design-system/ui';
import payment from '@/entities/payment/api/payment';
import { ROUTE } from '@/shared/config/route';
import * as S from './index.styles';

interface ManageMenuProps {
  groupToken: string;
}

function ManageMenu({ groupToken }: ManageMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlockedModalOpen, setIsBlockedModalOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

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
              {/* TODO: 계좌 수정 기능 구현 시 연결 */}
              <S.MenuItemButton disabled>계좌 수정</S.MenuItemButton>
            </S.MenuCard>
          </>,
          document.querySelector('#modal') ?? document.body
        )}
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
