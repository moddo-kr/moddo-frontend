import { HtmlHTMLAttributes } from 'react';
import { ButtonGroupDirection } from './index.type';
import * as S from './index.styles';

interface ButtonGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {
  direction?: ButtonGroupDirection;
}

function ButtonGroup({
  direction = 'horizontal',
  children,
}: ButtonGroupProps): JSX.Element {
  return <S.Wrapper $direction={direction}>{children}</S.Wrapper>;
}

export default ButtonGroup;
