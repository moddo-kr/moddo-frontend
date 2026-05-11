import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const HeaderTrailingLabel = styled.span`
  ${applyTypography('typography.body.medium')};
`;

export const GroupNameHighlight = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.primary.normal')};
`;

export const ExpenseFormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[24]};
  width: 100%;
  flex: 1 0 0;
  overflow-y: auto;
  padding: ${({ theme }) =>
    `0 ${theme.unit[20]} ${theme.unit[24]} ${theme.unit[20]}`};
  background: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;
