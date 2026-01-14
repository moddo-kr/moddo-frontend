import { HTMLAttributes, forwardRef } from 'react';
import { FlexStyledProps } from '@/shared/types/styled';
import * as S from './index.style';

interface FlexProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    FlexStyledProps {}

/**
 * Flex 컨테이너
 * spacing 값은 theme.unit 토큰 사용 (예: 16 = 1rem = 16px)
 * 숫자 토큰 → px 문자열 → rem 문자열 순으로 fallback 처리됨
 * @example <Flex gap={16} padding="8px" mt="1rem" />
 */

const Flex = forwardRef<HTMLDivElement, FlexProps>(({ ...props }, ref) => {
  return <S.Flex ref={ref} {...props} />;
});

Flex.displayName = 'Flex';

export default Flex;
