import { useState } from 'react';
import { Close, Copy } from '@/shared/assets/svgs/icon';
import { Kakaotalk, Slack } from '@/shared/assets/svgs/logo';
import Button from '@/shared/components/Button';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import { showToast } from '@/shared/components/Toast';
import { ToastProps } from '@/shared/components/Toast/index.type';
import copyClipboard from '@/shared/utils/copyClipboard';
import shareKakao from '@/shared/utils/shareKakao';
import { shareDataFormat, shareMessageFormat } from './config/shareFormat';
import * as S from './index.styles';

const toastMessage: Record<string, ToastProps> = {
  copySuccess: {
    type: 'success',
    content: '링크 복사 완료!',
  },
  copyError: {
    type: 'error',
    content: '링크 복사 실패!',
  },
};

interface ShareButtonProps {
  shareLink: string;
}

function ShareButton({ shareLink }: ShareButtonProps) {
  const [openShareModal, setOpenShareModal] = useState<boolean>(false);

  const shareData = shareDataFormat(shareLink);
  const shareMessage = shareMessageFormat(shareLink);

  /** 링크를 복사하고 토스트를 띄우는 함수 */
  const handleCopyLink = () =>
    copyClipboard(shareMessage)
      .then((isCopied) => {
        if (isCopied) {
          showToast(toastMessage.copySuccess);
          return true;
        }
        showToast(toastMessage.copyError);
        return false;
      })
      .catch(() => {
        showToast(toastMessage.copyError);
        throw new Error('링크 복사 실패!');
      });

  /** 링크를 복사하고 토스트를 띄우고 모달을 여는 함수 */
  const handleClickShareButton = () => {
    handleCopyLink().finally(() => setOpenShareModal(true));
  };

  const handleShareKakaoButton = () => {
    shareKakao(shareData);
    setOpenShareModal(false);
  };

  const handleShareSlackButton = () => {
    // 공유할 데이터를 복사한 뒤에 슬랙을 열기
    handleCopyLink()
      .then((isCopied) => {
        if (isCopied) {
          window.open('slack://open', '_blank');
        }
      })
      .finally(() => setOpenShareModal(false));
  };

  /** 링크를 복사한 뒤에 토스트를 띄우고 모달을 닫는 함수 */
  const handleLinkCopyButton = () => {
    // 링크 복사한 후에 모달 닫기
    handleCopyLink().finally(() => setOpenShareModal(false));
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
            <S.ShareItemContainer>
              <S.ShareButton type="button" onClick={handleShareKakaoButton}>
                <Kakaotalk width="3rem" />
              </S.ShareButton>
              <S.ShareButton type="button" onClick={handleShareSlackButton}>
                <Slack width="1.5rem" />
              </S.ShareButton>
              <S.ShareButton type="button" onClick={handleLinkCopyButton}>
                <Copy width="1.5rem" />
              </S.ShareButton>
            </S.ShareItemContainer>
          </S.ShareModalContainer>
        </Modal>
      )}
    </>
  );
}

export default ShareButton;
