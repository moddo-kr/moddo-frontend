import styled from 'styled-components';
import { Accordion } from '@chakra-ui/react';

export const ExpenseCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0rem 1.25rem;
  width: 100%;
`;

export const Date = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #444950;
`;

export const Card = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 1.25rem;
  background: #faf6f3;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Index = styled.span`
  color: #444950;
  font-size: 1.125rem;
  font-weight: 600;
`;

export const IconButtonsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const IconButton = styled.button`
  width: 1.25rem;
  height: 1.25rem;
`;

export const Content = styled.span`
  display: block;
  color: #6f7379;
  font-size: 1rem;
  font-weight: 400;
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
  color: var(--text-strong, #292c30);
  font-size: 1.25rem;
  font-weight: 700;
`;

export const MemberCollapse = styled(Accordion.Root)``;

export const CollapseItem = styled(Accordion.Item)``;

export const CollapseTrigger = styled(Accordion.ItemTrigger)`
  display: flex;
  justify-content: flex-end;
`;

export const TriggerText = styled.span`
  color: #444950;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const MemberCount = styled.span`
  color: #ff802e;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const CollapseContent = styled(Accordion.ItemContent)`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
