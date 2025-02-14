import styled from 'styled-components';

export const ShareButton = styled.button`
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

export const BottomSheetContainer = styled.div`
  display: flex;
  padding: 1.75rem 1.25rem;
  flex-direction: column;
  gap: 1.75rem;
`;

export const BottomSheetTitle = styled.span`
  color: #444950;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 150%; /* 1.875rem */
`;

export const ShareItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.72rem;
`;
