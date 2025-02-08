import styled from 'styled-components';

export const TopWrapper = styled.div`
  padding: 0.625rem 1.25rem;
`;

export const MoimName = styled.span`
  color: #ff802e;
`;

export const TopMessage = styled.span`
  color: #292c30;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 150%;
  white-space: pre-line;
`;

export const AddExpenseButton = styled.span`
  color: #444950;
  font-size: 1rem;
  font-weight: 600;
`;

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 1.25rem;
  align-items: center;
  border-bottom: 1px solid #f1f3f5;
`;

export const TabButton = styled.button<{ $isSelected: boolean }>`
  height: 3rem;
  padding: 0.625rem 0rem;
  flex: 1 0 0;
  border-bottom: 0.125rem solid
    ${({ $isSelected }) => ($isSelected ? '#1a1a1a' : 'transparent')};
  color: ${({ $isSelected }) => ($isSelected ? '#444950' : '#1a1a1a')};
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.3)};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.01rem;
`;

export const BillFormList = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 0 0;
  padding: 1rem 1.25rem;
  background: #faf6f3;
  overflow-y: auto;
`;

export const ButtonWrapper = styled.div`
  padding: 0 1.25rem 1rem 1.25rem;
  width: 100%;
`;

export const BottomButton = styled.button`
  height: 3.5rem;
  width: 100%;
  padding: 1rem 0.875rem;
  border-radius: 624.9375rem;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%; /* 1.6875rem */
  background-color: #35393e;
  &:disabled {
    background-color: #d2d4d5;
  }
`;
