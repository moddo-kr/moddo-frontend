import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ActionArea, BottomSheet } from '@/shared/design-system/ui';
import NumberInput from '@/features/expense-management/ui/NumberInput';
import * as S from './index.styles';
import NumPad from '../NumPad';

interface NumPadBottomSheetProps {
  initialValue: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: (value: number) => void; // Form의 금액 입력값을 업데이트하는 함수
}

function NumPadBottomSheet({
  initialValue,
  open,
  setValue,
  setOpen,
}: NumPadBottomSheetProps) {
  const [input, setInput] = useState<number>(initialValue); // Numpad의 입력값을 관리하는 상태

  useEffect(() => {
    // 500만원 이상은 입력 불가능하도록 처리
    if (input > 5_000_000) {
      setInput(5_000_000);
    }
  }, [input]);

  return (
    <>
      <NumberInput
        onClick={() => setOpen(true)}
        value={initialValue ? initialValue.toLocaleString() : ''}
        placeholder="금액 입력"
        readOnly
      />
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        title="결제 금액 입력"
      >
        <S.NumPadContainer>
          <NumPad
            input={input}
            setInput={setInput}
            onClose={() => setOpen(false)}
          />
          <ActionArea
            mainAction={{
              label: '완료',
              onClick: () => {
                setValue(input);
                setOpen(false);
              },
              disabled: input === 0,
            }}
          />
        </S.NumPadContainer>
      </BottomSheet>
    </>
  );
}

export default NumPadBottomSheet;
