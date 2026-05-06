import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const KeyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  min-width: 116px;
  padding: ${getToken('padding.4')} ${getToken('padding.5')};
  overflow: hidden;
  background: transparent;
  border: none;
  cursor: pointer;

  &:active {
    background: ${getToken('fill.neutral')};
  }
`;

export const NumberText = styled.span`
  ${applyTypography('typography.heading.medium')}
  color: ${getToken('fg.normal')};
`;

export const CancelText = styled.span`
  ${applyTypography('typography.body.medium')}
  color: ${getToken('fg.normal')};
`;
