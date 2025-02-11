import { useState } from 'react';
import {
  DrawerBackdrop,
  DrawerContent,
  DrawerRoot,
} from '@/common/components/Drawer/drawer';
import copyClipboard from '@/common/utils/copyClipboard';
import * as S from './index.styles';
import ShareItemButton from '../ShareItemButton';

interface ShareButtonProps {
  shareLink: string;
}

function ShareButton({ shareLink }: ShareButtonProps) {
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);
  const [openToast, setOpenToast] = useState<boolean>(false);

  return (
    <DrawerRoot
      open={openBottomSheet}
      onOpenChange={(e) => setOpenBottomSheet(e.open)}
      placement="bottom"
    >
      <DrawerBackdrop />
      <S.ShareButton type="button" onClick={() => setOpenBottomSheet(true)}>
        링크 공유하기
      </S.ShareButton>
      <DrawerContent>
        <S.BottomSheetContainer className="BottomSheetContainer">
          <S.BottomSheetTitle>링크 공유</S.BottomSheetTitle>
          <S.ShareItemContainer>
            <ShareItemButton text="복사" onClick={() => {}} />
            <ShareItemButton text="카카오톡" onClick={() => {}} />
            <ShareItemButton text="메시지" onClick={() => {}} />
            <ShareItemButton text="슬랙" onClick={() => {}} />
            <ShareItemButton text="더보기" onClick={() => {}} />
          </S.ShareItemContainer>
        </S.BottomSheetContainer>
      </DrawerContent>
    </DrawerRoot>
  );
}

export default ShareButton;
