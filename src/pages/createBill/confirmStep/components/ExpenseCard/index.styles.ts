import Accordion from '@/common/components/Accordion';
import styled from 'styled-components';

export const ExpenseCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  padding: ${({ theme }) => `${theme.unit[18]} ${theme.unit[20]}`};
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 1.25rem;
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.default};
  border: ${({ theme }) => `1px solid ${theme.color.semantic.border.default}`};
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const IconButtonsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.25rem;
  align-self: stretch;
`;

export const Distribute = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
`;

export const DistributeText = styled.span`
  color: #292c30;
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CollapseItem = styled(Accordion)``;

export const CollapseHeader = styled(Accordion.Header)`
  display: flex;
  justify-content: flex-end;
`;

export const CollapseContent = styled(Accordion.Content)`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
