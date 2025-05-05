import { ElementType } from 'react';
import { ColorTokenType, TypographyKey } from '@/styles/theme.type';
import * as S from './index.styles';

interface TextProps {
  className?: string;
  variant?: TypographyKey;
  color?: ColorTokenType;
  as?: ElementType;
  children: React.ReactNode;
}

function Text({
  className,
  variant = 'body1R',
  color,
  as = 'span',
  children,
}: TextProps) {
  return (
    <S.Text as={as} className={className} $variant={variant} $color={color}>
      {children}
    </S.Text>
  );
}

export default Text;
