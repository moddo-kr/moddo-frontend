import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const NameHighlight = styled.span`
  color: ${getToken('fg.primary.normal')};
`;

export const ManageLabel = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;

export const TabListContainer = styled.div`
  padding: ${({ theme }) =>
    `${theme.unit[24]} ${theme.unit[20]} 0 ${theme.unit[20]}`};
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.subtle};
`;
