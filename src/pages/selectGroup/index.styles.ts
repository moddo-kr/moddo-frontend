import styled from 'styled-components';

export const SmallContent = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;

export const MainContent = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const SelectButton = styled.button<{ selected: boolean }>`
  width: 50%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  height: 192px;
  background-color: #f5f5f5;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
