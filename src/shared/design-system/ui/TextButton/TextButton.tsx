import { ButtonHTMLAttributes } from 'react';
import * as S from './TextButton.styles';

type TextButtonSize = 'medium' | 'small';

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TextButtonSize;
}

function TextButton(props: TextButtonProps) {
  const { size = 'medium', children, ...rest } = props;

  return (
    <S.TextButton type="button" $size={size} {...rest}>
      {children}
    </S.TextButton>
  );
}

export { TextButton };
export type { TextButtonProps, TextButtonSize };
