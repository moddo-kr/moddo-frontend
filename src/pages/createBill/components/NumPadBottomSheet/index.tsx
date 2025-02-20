import { Dispatch, SetStateAction, useState } from 'react';
import { Close } from '@/assets/svgs/icon';
import NumPad from '@/common/components/NumPad';
import BottomSheet from '@/common/components/BottomSheet';
import Button from '@/common/components/Button';
import NumberInput from '@/common/components/NumberInput';
import Text from '@/common/components/Text';
import * as S from './index.styles';

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
      {/* <S.ValueWrapper onClick={() => setOpen(true)}> */}
      {/* FIXME : placeholder가 보이지 않는 문제 해결 필요함 */}
      <NumberInput
        onClick={() => setOpen(true)}
        value={initialValue ? initialValue.toLocaleString() : ''}
        placeholder="금액 입력"
        readOnly
      />
      {/* </S.ValueWrapper> */}
      <BottomSheet open={open} setOpen={setOpen}>
        <S.NumPadContainer>
          <S.Header>
            <Text variant="heading2">결제 금액 입력</Text>
            <Button variant="text" onClick={() => setOpen(false)}>
              <Close width="1.5rem" />
            </Button>
          </S.Header>
          <NumPad
            input={input}
            setInput={setInput}
            onClose={() => setOpen(false)}
          />
          <S.ButtonWrapper>
            <Button
              disabled={input === 0}
              onClick={() => {
                setValue(input);
                setOpen(false);
              }}
            >
              완료
            </Button>
          </S.ButtonWrapper>
        </S.NumPadContainer>
      </BottomSheet>
    </>
  );
}

export default NumPadBottomSheet;
