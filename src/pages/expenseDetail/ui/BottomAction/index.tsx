import { Button } from '@/shared/design-system/ui';
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

  if (status === 'success') {
    return <Button onClick={onBackToHome}>홈으로 돌아가기</Button>;
  }

  // status === 'pending'
  if (myProfile.role === 'MANAGER' && memberTotal === memberDone) {
    return <Button onClick={onSettleClick}>정산 완료하기</Button>;
  }

  if (myProfile.role === 'PARTICIPANT' && !myProfile.isPaid) {
    return <Button onClick={onPaymentRequestClick}>입금 확인 요청</Button>;
  }

  if (myProfile.role === 'PARTICIPANT' && myProfile.isPaid) {
    return <Button disabled>정산 완료</Button>;
  }

  return (
    <>
      <Button onClick={share.startShare}>링크 공유하기</Button>
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
