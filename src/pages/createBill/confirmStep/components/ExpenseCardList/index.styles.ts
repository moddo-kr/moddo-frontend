import styled from 'styled-components';

export const CardListWrapper = styled.div`
  overflow-y: auto;
`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  flex: 1 0 0;
  overflow-y: auto;
  padding: 1rem 1.25rem;
`;

// NOTE: 현재 disabled 상태의 디자인만 존재함
export const ChangeOrderButton = styled.button`
  width: 100%;
  padding: 0rem 1.25rem;
  color: 868a8f;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
  opacity: 0.5;
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
