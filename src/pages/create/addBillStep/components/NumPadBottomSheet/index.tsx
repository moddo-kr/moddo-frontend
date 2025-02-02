import { Dispatch, SetStateAction } from 'react';
import {
  DrawerBackdrop,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from '@/common/components/Drawer/drawer';
import NumPad from '../NumPad.tsx';
import * as S from './index.styles';

interface NumPadBottomSheetProps {
  initialInput: number;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setInput: (value: number) => void;
}

function NumPadBottomSheet({
  initialInput,
  open,
  setInput,
  setOpen,
}: NumPadBottomSheetProps) {
  return (
    <DrawerRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      placement="bottom"
    >
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <S.ValueWrapper>
          <S.DisplayValue $isEmpty={initialInput === 0}>
            {initialInput === 0 ? '금액입력' : initialInput.toLocaleString()}
          </S.DisplayValue>
          <S.DisplayValueUnit>원</S.DisplayValueUnit>
        </S.ValueWrapper>
      </DrawerTrigger>
      <DrawerContent>
        <NumPad
          initialInput={initialInput}
          onChange={setInput}
          onClose={() => setOpen(false)}
        />
      </DrawerContent>
    </DrawerRoot>
  );
}

export default NumPadBottomSheet;
