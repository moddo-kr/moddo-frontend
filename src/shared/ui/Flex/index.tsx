import { HTMLAttributes, forwardRef } from 'react';
import { FlexStyledProps } from '@/shared/types/styled';
import * as S from './index.style';

interface FlexProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    FlexStyledProps {}

const Flex = forwardRef<HTMLDivElement, FlexProps>(({ ...props }, ref) => {
  return <S.Flex ref={ref} {...props} />;
});

Flex.displayName = 'Flex';

export default Flex;
