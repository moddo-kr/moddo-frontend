import { ActionArea } from '@/shared/design-system/ui';
import { useShareLink, ShareModal } from '@/features/share';
import { MemberProfile } from '@/entities/member/model/member.type';
import { StatusType } from '../ExpenseTimeHeader/index.type';

interface BottomActionProps {
  status: StatusType;
  myProfile: MemberProfile;
  memberTotal: number;
  memberDone: number;
  shareLink: string;
  onSettleClick: () => void;
  onPaymentRequestClick: () => void;
  onBackToHome: () => void;
}

function BottomAction({
  status,
  myProfile,
  memberTotal,
  memberDone,
  shareLink,
  onSettleClick,
  onPaymentRequestClick,
  onBackToHome,
}: BottomActionProps) {
  const share = useShareLink(shareLink);

  if (status === 'success')
    return (
      <ActionArea
        mainAction={{
          label: '홈으로 돌아가기',
          onClick: onBackToHome,
        }}
      />
    );

  if (myProfile.role === 'MANAGER' && memberTotal === memberDone)
    return (
      <ActionArea
        mainAction={{
          label: '정산 완료하기',
          onClick: onSettleClick,
        }}
      />
    );

  if (myProfile.role === 'PARTICIPANT' && !myProfile.isPaid)
    return (
      <ActionArea
        mainAction={{
          label: '입금 확인 요청',
          onClick: onPaymentRequestClick,
        }}
      />
    );

  if (myProfile.role === 'PARTICIPANT' && myProfile.isPaid)
    return (
      <ActionArea
        mainAction={{
          label: '정산 완료',
          onClick: () => {},
          disabled: true,
        }}
      />
    );

  return (
    <>
      <ActionArea
        mainAction={{ label: '링크 공유하기', onClick: share.startShare }}
      />
      <ShareModal
        open={share.isOpen}
        onClose={share.close}
        onKakaoShare={share.shareKakao}
        onSlackShare={share.shareSlack}
        onCopyLink={share.copyLink}
      />
    </>
  );
}

export default BottomAction;
