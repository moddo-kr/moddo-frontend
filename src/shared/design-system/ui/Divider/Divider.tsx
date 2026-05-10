import { HTMLAttributes } from 'react';
import * as S from './Divider.styles';

function Divider({
  role = 'separator',
  'aria-orientation': ariaOrientation = 'horizontal',
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <S.Divider role={role} aria-orientation={ariaOrientation} {...props} />
  );
}

export { Divider };
