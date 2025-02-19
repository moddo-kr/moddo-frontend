import { Dispatch, SetStateAction, useState } from 'react';
import { Close } from '@/assets/svgs/icon';
import NumPad from '@/common/components/NumPad';
import * as S from './index.styles';
import BottomSheet from '@/common/components/BottomSheet';

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
  // TODO : 입력 가능한 최댓값을 제한해야 할듯. - 500만원 이상은 입력 불가능하도록 처리하기
  const [input, setInput] = useState<number>(initialValue); // Numpad의 입력값을 관리하는 상태

  return (
    <>
      <S.ValueWrapper onClick={() => setOpen(true)}>
        <S.DisplayValue $isEmpty={initialValue === 0}>
          {initialValue === 0 ? '금액입력' : initialValue.toLocaleString()}
        </S.DisplayValue>
        <S.DisplayValueUnit>원</S.DisplayValueUnit>
      </S.ValueWrapper>
      <BottomSheet open={open} setOpen={setOpen}>
        <S.NumPadContainer>
          <S.Header>
            <S.Description>결제 금액 입력</S.Description>
            <button type="button" onClick={() => setOpen(false)}>
              <Close width="1.5rem" />
            </button>
          </S.Header>
          <NumPad
            input={input}
            setInput={setInput}
            onClose={() => setOpen(false)}
          />
          <S.ButtonWrapper>
            <S.BottomButton
              type="button"
              onClick={() => {
                setValue(input);
                setOpen(false);
              }}
            >
              완료
            </S.BottomButton>
          </S.ButtonWrapper>
        </S.NumPadContainer>
      </BottomSheet>
    </>
  );
}

export default NumPadBottomSheet;
