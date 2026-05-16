import { Close, Copy } from '@/shared/assets/svgs/icon';
import { Kakaotalk, Slack } from '@/shared/assets/svgs/logo';
import { IconButton, Modal } from '@/shared/design-system/ui';
import Text from '@/shared/ui/Text';
import * as S from './ShareModal.styles';

interface ShareModalProps {
  open: boolean;
  onClose: () => void;
  onKakaoShare: () => void;
  onSlackShare: () => void;
  onCopyLink: () => void;
}

function ShareModal({
  open,
  onClose,
  onKakaoShare,
  onSlackShare,
  onCopyLink,
}: ShareModalProps) {
  return (
    <Modal open={open} onClose={onClose} ariaLabel="링크 공유하기">
      <S.ShareModalContainer>
        <S.ModalTitle>
          <Text variant="title" color="semantic.text.strong">
            링크 공유하기
          </Text>
          <IconButton aria-label="공유 모달 닫기" onClick={onClose}>
            <Close width="1.5rem" />
          </IconButton>
        </S.ModalTitle>
        <S.ShareItemContainer>
          <S.IconButton
            type="button"
            aria-label="카카오톡으로 공유"
            onClick={onKakaoShare}
          >
            <Kakaotalk width="3rem" />
          </S.IconButton>
          <S.IconButton
            type="button"
            aria-label="Slack으로 공유"
            onClick={onSlackShare}
          >
            <Slack width="1.5rem" />
          </S.IconButton>
          <S.IconButton
            type="button"
            aria-label="링크 복사"
            onClick={onCopyLink}
          >
            <Copy width="1.5rem" />
          </S.IconButton>
        </S.ShareItemContainer>
      </S.ShareModalContainer>
    </Modal>
  );
}

export { ShareModal };
