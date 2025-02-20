import styled from 'styled-components';
import { TextVariant } from '@/common/components/Text/index.styles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const ModdoImage = styled.img`
  width: 47%;
  margin-top: 18%;
  margin-bottom: ${({ theme }) => theme.unit[20]};
`;

export const TabListContainer = styled.div`
  padding: ${({ theme }) =>
    `${theme.unit[24]} ${theme.unit[20]} 0 ${theme.unit[20]}`};
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.subtle};
`;

export const ExpenseChip = styled.div`
  display: flex;
  background: ${({ theme }) => theme.color.semantic.primary.default};
  color: ${({ theme }) => theme.color.semantic.text.inverse};
  border-radius: ${({ theme }) => theme.radius.circle};
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[20]}`};
  font-size: ${TextVariant('body1Sb')};
`;

export const TotalMoney = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.color.semantic.orange.default};
  font-size: ${TextVariant('body2Sb')};
  right: -6%;
  top: 57.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
