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
  const progress =
    totalMember > 0
      ? Math.min(100, Math.max(0, (paidMember / totalMember) * 100))
      : 0;

  return (
    <S.Container to={`/expense-detail/${groupCode}`}>
      <S.TextGroup>
        <S.GroupName>{groupName}</S.GroupName>
        <S.Amount>{totalAmount.toLocaleString('ko-KR')}원</S.Amount>
      </S.TextGroup>
      <S.ProgressSection>
        <S.ProgressBar
          role="progressbar"
          aria-label={`${groupName} 정산 진행률`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <S.ProgressTrack />
          <S.ProgressFill $progress={progress} />
        </S.ProgressBar>
        <S.CountRow>
          <SvgDollarCircle width={24} height={24} color="#FECB3F" />
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
