import * as S from './StarChip.styles';

type StarCount = 1 | 2 | 3;

interface StarChipProps {
  count: StarCount;
}

function StarChip({ count }: StarChipProps) {
  return (
    <S.Container>
      {Array.from({ length: 3 }, (_, i) => (
        <S.Star key={i} $active={i < count} />
      ))}
    </S.Container>
  );
}

export { StarChip };
export type { StarChipProps, StarCount };
