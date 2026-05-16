import { ButtonHTMLAttributes } from 'react';
import * as S from './Button.styles';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'black' | 'red';
type ButtonSize = 'medium' | 'small' | 'xsmall';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'medium', children, ...rest } = props;

  return (
    <S.Button type="button" $variant={variant} $size={size} {...rest}>
      {children}
    </S.Button>
  );
}

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
