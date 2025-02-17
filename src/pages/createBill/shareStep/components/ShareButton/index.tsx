import { useState } from 'react';
import {
  DrawerBackdrop,
  DrawerContent,
  DrawerRoot,
} from '@/common/components/Drawer/drawer';
import {
  shareDataFormat,
  shareMessageFormat,
} from '@/common/constants/shareFormat';
import copyClipboard from '@/common/utils/copyClipboard';
import share from '@/common/utils/share';
import shareKakao from '@/common/utils/shareKakao';
import * as S from './index.styles';
import ShareItemButton from '../ShareItemButton';
import { showToast } from '@/common/components/Toast';

interface ShareButtonProps {
  shareLink: string;
}

function ShareButton({ shareLink }: ShareButtonProps) {
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);

  const shareData = shareDataFormat(shareLink);
  const shareMessage = shareMessageFormat(shareLink);

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
            <ShareItemButton
              text="복사"
              onClick={() => {
                copyClipboard(shareMessageFormat(shareLink))
                  .then(() => {
                    showToast({type: 'success', content: '링크 복사 완료!'});
                  })
                  .finally(() => {
                    setOpenBottomSheet(false);
                  });
              }}
            />
            <ShareItemButton
              text="카카오톡"
              onClick={() => {
                shareKakao(shareData);
              }}
            />
            <ShareItemButton text="메시지" onClick={() => {}} />
            <ShareItemButton
              text="슬랙"
              onClick={() => {
                copyClipboard(shareMessage)
                  .then(() => {
                    window.open('slack://open', '_blank');
                  })
                  .finally(() => {
                    setOpenBottomSheet(false);
                  });
              }}
            />
            <ShareItemButton
              text="더보기"
              onClick={() => {
                share(shareData).finally(() => {
                  setOpenBottomSheet(false);
                });
              }}
            />
          </S.ShareItemContainer>
        </S.BottomSheetContainer>
      </DrawerContent>
    </DrawerRoot>
  );
}

export default ShareButton;
