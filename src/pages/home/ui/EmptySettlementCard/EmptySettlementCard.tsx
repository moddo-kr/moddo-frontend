import * as S from './EmptySettlementCard.styles';

interface EmptySettlementCardProps {
  groupCode: string;
  groupName: string;
}

function EmptySettlementCard({
  groupCode,
  groupName,
}: EmptySettlementCardProps) {
  return (
    <S.Container to={`/create-expense/${groupCode}`}>
      <S.TextGroup>
        <S.GroupName>{groupName}</S.GroupName>
        <S.Amount>0원</S.Amount>
      </S.TextGroup>
      <S.ProgressSection>
        <S.ProgressBar
          role="progressbar"
          aria-label={`${groupName} 정산 진행률`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={0}
        >
          <S.ProgressTrack />
        </S.ProgressBar>
        <S.MessageRow>
          <S.WarningIcon width={24} height={24} />
          <S.Message>아직 정산 내역을 입력하지 않았어요</S.Message>
        </S.MessageRow>
      </S.ProgressSection>
    </S.Container>
  );
}

export { EmptySettlementCard };
export type { EmptySettlementCardProps };
