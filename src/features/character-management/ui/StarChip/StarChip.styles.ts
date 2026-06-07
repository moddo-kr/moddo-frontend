import styled from 'styled-components';
import SvgStar from '@/shared/assets/svgs/icon/Star';
import { getToken } from '@/shared/design-system';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.1')};
  padding: ${getToken('padding.2')} ${getToken('padding.3')};
  border-radius: ${getToken('radius.full')};
  background: ${getToken('fill.inverse.neutral')};
`;

export const Star = styled(SvgStar)<{ $active: boolean }>`
  width: 18px;
  height: 18px;
  color: ${({ $active }) =>
    $active
      ? getToken('fg.accent-yellow.normal')
      : getToken('fill.alternative')};
`;
