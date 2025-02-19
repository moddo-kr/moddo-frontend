import { ElementType } from 'react';
import { ColorKey, TypographyKey } from '@/styles/theme.type';
import * as S from './index.styles';

interface TextProps {
  variant?: TypographyKey;
  color?: ColorKey;
  as?: ElementType;
  children: React.ReactNode;
}

function Text({ variant = 'body1R', color, as = 'span', children }: TextProps) {
  return (
    <S.Text as={as} $variant={variant} $color={color}>
      {children}
    </S.Text>
  );
}

export default Text;
