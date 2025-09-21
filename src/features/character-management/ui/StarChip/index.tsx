import { useTheme } from 'styled-components';
import { Star } from '@/shared/assets/svgs/icon';
import * as S from './index.styles';

interface StarChipProps {
  star: number;
}

function StarChip({ star }: StarChipProps) {
  const { color, unit } = useTheme();
  return (
    <S.StarChip>
      {Array.from({ length: 3 }, (_, index) => (
        <S.StarWrapper key={index} $isFirst={index === 0}>
          <Star
            width={unit[18]}
            fill={index < star ? '#FECB3F' : color.semantic.secondary.strong}
          />
        </S.StarWrapper>
      ))}
    </S.StarChip>
  );
}

export default StarChip;
