import SvgDollarCircle from '@/shared/assets/svgs/icon/DollarCircle';
import * as S from './SettlementProgressCard.styles';

interface SettlementProgressCardProps {
  groupName: string;
  amount: number;
  paidCount: number;
  totalCount: number;
}

function SettlementProgressCard({
  groupName,
  amount,
  paidCount,
  totalCount,
}: SettlementProgressCardProps) {
  const progress = totalCount > 0 ? (paidCount / totalCount) * 100 : 0;

  return (
    <S.Container>
      <S.TextGroup>
        <S.GroupName>{groupName}</S.GroupName>
        <S.Amount>{amount.toLocaleString('ko-KR')}원</S.Amount>
      </S.TextGroup>
      <S.ProgressSection>
        <S.ProgressBar>
          <S.ProgressTrack />
          <S.ProgressFill $progress={progress} />
        </S.ProgressBar>
        <S.CountRow>
          <SvgDollarCircle width={24} height={24} />
          <S.CountGroup>
            <S.PaidCountText>{paidCount}</S.PaidCountText>
            <S.TotalCountText>/{totalCount} 정산 완료</S.TotalCountText>
          </S.CountGroup>
        </S.CountRow>
      </S.ProgressSection>
    </S.Container>
  );
}

export { SettlementProgressCard };
export type { SettlementProgressCardProps };
