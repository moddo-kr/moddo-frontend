import type { ChangeEventHandler } from 'react';
import { Dialog, Input, Modal } from '@/shared/design-system/ui';
import { Dropdown, type DropdownOption } from '../Dropdown';

interface AccountEditDialogProps {
  open: boolean;
  bankOptions: DropdownOption[];
  bankValue: string;
  bankPlaceholder?: string;
  onBankChange: (value: string) => void;
  accountNumber: string;
  accountNumberPlaceholder?: string;
  onAccountNumberChange: ChangeEventHandler<HTMLInputElement>;
  onCancel: () => void;
  onConfirm: () => void;
}

function AccountEditDialog(props: AccountEditDialogProps) {
  const {
    open,
    bankOptions,
    bankValue,
    bankPlaceholder = '은행을 선택해주세요',
    onBankChange,
    accountNumber,
    accountNumberPlaceholder = '계좌 번호를 입력해주세요',
    onAccountNumberChange,
    onCancel,
    onConfirm,
  } = props;

  const isConfirmDisabled = !bankValue || !accountNumber;

  return (
    <Modal open={open} onClose={onCancel} ariaLabel="계좌 수정">
      <Dialog
        title="계좌 수정"
        description="정산 받을 계좌를 입력해주세요."
        mainAction={{
          label: '확인',
          onClick: onConfirm,
          disabled: isConfirmDisabled,
        }}
        alternativeAction={{ label: '취소', onClick: onCancel }}
      >
        <Dropdown
          label="은행 선택"
          options={bankOptions}
          value={bankValue}
          onChange={onBankChange}
          placeholder={bankPlaceholder}
        />
        <Input
          label="계좌 번호"
          placeholder={accountNumberPlaceholder}
          value={accountNumber}
          onChange={onAccountNumberChange}
        />
      </Dialog>
    </Modal>
  );
}

export { AccountEditDialog };
export type { AccountEditDialogProps };
