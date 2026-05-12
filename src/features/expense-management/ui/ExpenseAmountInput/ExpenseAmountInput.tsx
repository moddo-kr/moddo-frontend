import { useState } from 'react';
import {
  ActionArea,
  BottomSheet,
  Button,
  Input,
  Keypad,
  KeyValue,
  PriceDisplay,
} from '@/shared/design-system/ui';
import {
  addToAmount,
  appendDigit,
  clearAmount,
  deleteLastDigit,
  formatAmount,
} from './expenseAmountUtils';
import * as S from './ExpenseAmountInput.styles';

const QUICK_ADD_BUTTONS = [
  { label: '+1만', amount: 10000 },
  { label: '+5만', amount: 50000 },
  { label: '+10만', amount: 100000 },
];

interface ExpenseAmountInputProps {
  initialValue: number;
  open: boolean;
  setOpen: (open: boolean) => void;
  setValue: (value: number) => void;
}

function ExpenseAmountInput({
  initialValue,
  open,
  setValue,
  setOpen,
}: ExpenseAmountInputProps) {
  const [input, setInput] = useState<number>(initialValue);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInput(initialValue); // 입력값 초기화
    setOpen(false);
  };

  const handleKeypadPress = (key: KeyValue) => {
    if (key === 'cancel') handleClose();
    else {
      setInput((prevInput: number) => {
        if (key === 'delete') return deleteLastDigit(prevInput);
        return appendDigit(prevInput, Number(key));
      });
    }
  };

  const handleQuickAdd = (amountToAdd: number) => {
    setInput((prevInput: number) => addToAmount(prevInput, amountToAdd));
  };

  const handleClearInput = () => {
    setInput(clearAmount());
  };

  const handleComplete = () => {
    setValue(input);
    setOpen(false);
  };

  return (
    <>
      <Input
        onClick={handleOpen}
        // label="지출금액"
        required
        placeholder="금액입력"
        variant="price"
        value={formatAmount(input)}
        readOnly
      />
      <BottomSheet open={open} onClose={handleClose} title="결제 금액 입력">
        <PriceDisplay value={formatAmount(input)} />
        <S.QuickAddContainer>
          {QUICK_ADD_BUTTONS.map(({ label, amount }) => (
            <Button
              key={amount}
              onClick={() => handleQuickAdd(amount)}
              variant="secondary"
              size="small"
            >
              {label}
            </Button>
          ))}
          <Button onClick={handleClearInput} variant="red" size="small">
            전체삭제
          </Button>
        </S.QuickAddContainer>
        <Keypad onPress={handleKeypadPress} />
        <ActionArea
          mainAction={{
            label: '완료',
            onClick: handleComplete,
            disabled: input === 0,
          }}
        />
      </BottomSheet>
    </>
  );
}

export { ExpenseAmountInput };
