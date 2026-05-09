import { useNavigate } from 'react-router';
import SvgDollarCircle from '@/shared/assets/svgs/icon/DollarCircle';
import * as S from './SettlementProgressCard.styles';

interface SettlementProgressCardProps {
  groupCode: string;
  groupName: string;
  totalAmount: number;
  paidMember: number;
  totalMember: number;
}

function SettlementProgressCard({
  groupCode,
  groupName,
  totalAmount,
  paidMember,
  totalMember,
}: SettlementProgressCardProps) {
  const navigate = useNavigate();
  const progress =
    totalMember > 0
      ? Math.min(100, Math.max(0, (paidMember / totalMember) * 100))
      : 0;

  // TODO: 디자이너 확인 후 클릭 시 정산 상세 페이지 이동 UX 확정 필요
  return (
    <S.Container onClick={() => navigate(`/expense-detail/${groupCode}`)}>
      <S.TextGroup>
        <S.GroupName>{groupName}</S.GroupName>
        <S.Amount>{totalAmount.toLocaleString('ko-KR')}원</S.Amount>
      </S.TextGroup>
      <S.ProgressSection>
        <S.ProgressBar>
          <S.ProgressTrack />
          <S.ProgressFill $progress={progress} />
        </S.ProgressBar>
        <S.CountRow>
          <SvgDollarCircle width={24} height={24} />
          <S.CountGroup>
            <S.PaidCountText>{paidMember}</S.PaidCountText>
            <S.TotalCountText>/{totalMember} 정산 완료</S.TotalCountText>
          </S.CountGroup>
        </S.CountRow>
      </S.ProgressSection>
    </S.Container>
  );
}

export { SettlementProgressCard };
export type { SettlementProgressCardProps };
