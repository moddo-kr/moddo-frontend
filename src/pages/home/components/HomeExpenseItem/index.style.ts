import { TextVariant } from '@/common/components/Text/index.styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.unit[20]}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[10]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[14]};
  padding: ${({ theme }) => `${theme.unit[18]} ${theme.unit[20]}`};
  background: ${({ theme }) => theme.color.semantic.background.normal.alternative};
  border-radius: ${({ theme }) => theme.radius.default};
  width: 100%;
  height: fit-content;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[8]};
  align-items: flex-end;
  width: 100%;
`;  

export const ExpenseProgress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.semantic.text.subtle};
  font-weight: ${TextVariant('body1Sb')};
  font-size: ${({ theme }) => theme.unit[14]};
`;