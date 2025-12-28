import { ElementType, HTMLAttributes } from 'react';
import { ColorKey, TypographyKey } from '@/shared/styles/theme.type';
import { BaseStyledProps } from '@/shared/types/styled';
import * as S from './index.styles';

interface TextProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
    BaseStyledProps {
  variant?: TypographyKey;
  as?: ElementType;
  color?: ColorKey;
}

function Text({
  variant = 'body1R',
  color,
  as = 'span',
  children,
  ...props
}: TextProps) {
  return (
    <S.Text as={as} $variant={variant} $color={color} {...props}>
      {children}
    </S.Text>
  );
}

export default Text;
