import { ButtonHTMLAttributes } from 'react';
import * as S from './IconButton.styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function IconButton({ children, ...rest }: IconButtonProps) {
  return (
    <S.IconButton type="button" {...rest}>
      {children}
    </S.IconButton>
  );
}

export { IconButton };
export type { IconButtonProps };
