import { StarCount } from '@/entities/character/model/character.type';
import * as S from './StarChip.styles';

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
export type { StarChipProps };
