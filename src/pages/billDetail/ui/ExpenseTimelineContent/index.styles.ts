import Accordion from '@/shared/ui/Accordion';
import styled from 'styled-components';

export const ExpenseContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.unit[24]} ${theme.unit[20]}`};
  align-items: center;
  gap: ${({ theme }) => theme.unit[4]};
  border-radius: ${({ theme }) => theme.radius.large};
  background: ${({ theme }) => theme.color.semantic.primary.subtle};
`;

export const ContentTitle = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.unit[8]};
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const MemberChipContainer = styled(Accordion)`
  width: 100%;
`;

export const MemberChipHeader = styled(Accordion.Header)`
  display: flex;
  gap: ${({ theme }) => theme.unit[4]};
  padding: 0;
  width: fit-content;
`;

export const MemberChipList = styled(Accordion.Content)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.unit[6]};
  margin-top: ${({ theme }) => theme.unit[6]};
`;
