import { useState } from 'react';
import { Close } from '@/assets/svgs/icon';
import Button from '@/common/components/Button';
import Modal from '@/common/components/Modal';
import Text from '@/common/components/Text';
import * as S from './index.styles';

interface ShareButtonProps {
  shareLink: string;
}

function ShareButton({ shareLink }: ShareButtonProps) {
  const [openShareModal, setOpenShareModal] = useState<boolean>(false);

  const handleClickShareButton = () => {
    // 링크 복사하기
    // 완료되면 토스트 띄우기
    setOpenShareModal(true);
  };

  return (
    <>
      <Button onClick={handleClickShareButton}>링크 공유하기</Button>
      {openShareModal && (
        <Modal
          open={openShareModal}
          setOpen={setOpenShareModal}
          variant="empty"
        >
          <S.ShareModalContainer>
            <S.ModalTitle>
              <Text variant="title" color="semantic.text.strong">
                링크 공유하기
              </Text>
              <Button variant="text" onClick={() => setOpenShareModal(false)}>
                <Close width="1.5rem" />
              </Button>
            </S.ModalTitle>
          </S.ShareModalContainer>
        </Modal>
      )}
    </>
  );
}

// function ShareButton({ shareLink }: ShareButtonProps) {
//   const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);

//   const shareData = shareDataFormat(shareLink);
//   const shareMessage = shareMessageFormat(shareLink);

//   return (
//     <DrawerRoot
//       open={openBottomSheet}
//       onOpenChange={(e) => setOpenBottomSheet(e.open)}
//       placement="bottom"
//     >
//       <DrawerBackdrop />
//       <S.ShareButton type="button" onClick={() => setOpenBottomSheet(true)}>
//         링크 공유하기
//       </S.ShareButton>
//       <DrawerContent>
//         <S.BottomSheetContainer className="BottomSheetContainer">
//           <S.BottomSheetTitle>링크 공유</S.BottomSheetTitle>
//           <S.ShareItemContainer>
//             <ShareItemButton
//               text="복사"
//               onClick={() => {
//                 copyClipboard(shareMessageFormat(shareLink))
//                   .then(() => {
//                     showToast({ type: 'success', content: '링크 복사 완료!' });
//                   })
//                   .finally(() => {
//                     setOpenBottomSheet(false);
//                   });
//               }}
//             />
//             <ShareItemButton
//               text="카카오톡"
//               onClick={() => {
//                 shareKakao(shareData);
//               }}
//             />
//             <ShareItemButton text="메시지" onClick={() => {}} />
//             <ShareItemButton
//               text="슬랙"
//               onClick={() => {
//                 copyClipboard(shareMessage)
//                   .then(() => {
//                     window.open('slack://open', '_blank');
//                   })
//                   .finally(() => {
//                     setOpenBottomSheet(false);
//                   });
//               }}
//             />
//             <ShareItemButton
//               text="더보기"
//               onClick={() => {
//                 share(shareData).finally(() => {
//                   setOpenBottomSheet(false);
//                 });
//               }}
//             />
//           </S.ShareItemContainer>
//         </S.BottomSheetContainer>
//       </DrawerContent>
//     </DrawerRoot>
//   );
// }

export default ShareButton;
