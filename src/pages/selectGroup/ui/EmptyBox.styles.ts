import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const EmptyBox = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.default};
  border-radius: ${({ theme }) => theme.radius.default};
  border: ${({ theme }) => `1px dashed ${theme.color.semantic.border.default}`};
  padding: ${({ theme }) => `${theme.unit[16]} ${theme.unit[8]}`};
  opacity: 0.5;
`;

export const EmptyBoxMessage = styled.span`
  ${applyTypography('typography.body.small')};
  color: ${getToken('fg.alternative')};
`;
