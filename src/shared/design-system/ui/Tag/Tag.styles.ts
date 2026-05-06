import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.2')};
  background: ${getToken('fill.neutral')};
  border-radius: ${getToken('radius.full')};
  white-space: nowrap;
  /* HACK: py 5px, h 32px에 해당하는 토큰 없음. rem 단위로 하드코딩. */
  padding: 0.3125rem ${getToken('padding.4')};
  height: 2rem;
`;

export const Label = styled.span`
  ${applyTypography('typography.caption.xsmall')}
  color: ${getToken('fg.neutral')};
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${getToken('fg.neutral')};
  width: 0.75rem;
  height: 0.75rem;
`;
