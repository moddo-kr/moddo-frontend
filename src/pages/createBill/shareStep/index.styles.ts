import styled from 'styled-components';

export const TopWrapper = styled.div`
  padding: 0.625rem 1.25rem;
`;

export const TopMessage = styled.span`
  font-size: 1.25rem;
  font-weight: 600; // semibold
  color: #000000;
  white-space: pre-line;
  line-height: 150%; /* 1.875rem */
`;

// export const BottomSheetContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 2rem 1.25rem 0 1.25rem;
//   gap: 1.75rem;
// `;

// export const BottomSheetTitle = styled.span`
//   color: #444950;
//   font-size: 1.25rem;
//   font-weight: 700;
//   line-height: 150%; /* 1.875rem */
// `;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

export const BottomSubButton = styled.button`
  height: 2.5rem;
  padding: 1rem 0.875rem;
  text-align: center;
  color: #292c30;
  font-size: 0.875rem;
  line-height: 150%; /* 1.3125rem */
`;

export const HamImg = styled.img`
  width: 15rem;
  height: 15rem;
`;
export const LinkImg = styled.img`
  width: 4.5rem;
  height: 3.16756rem;
`;
