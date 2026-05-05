import Button from '@/shared/ui/Button';
import ShareButton from '@/shared/ui/ShareButton';
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

  return <ShareButton shareLink={shareLink} />;
}

export default BottomAction;
