import { ButtonHTMLAttributes } from 'react';
import { ButtonVariant, ButtonSize } from './index.type';
import * as S from './index.styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, ...rest } = props;

  return (
    <S.Button type="button" $variant={variant} $size={size} {...rest}>
      {children}
    </S.Button>
  );
}

export default Button;
