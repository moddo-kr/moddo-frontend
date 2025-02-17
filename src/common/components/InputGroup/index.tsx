import { HtmlHTMLAttributes } from 'react';
import * as S from './index.styles';

interface InputGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {}

function InputGroup({ children, ...props }: InputGroupProps) {
  return <S.Container {...props}>{children}</S.Container>;
}

export default InputGroup;
