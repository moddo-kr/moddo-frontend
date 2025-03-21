import styled from 'styled-components';

export const DrawerHeader = styled.h2`
  font-size: 1.25rem; // 20px
  font-weight: 700;
`;

export const DrawerBody = styled.div`
  height: 370px;
  overflow-y: auto;
  width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  @media (max-width: 385px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  gap: 8px;
  width: 100%;
  place-items: center;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 0.9rem; // 16px 14px
  border-radius: 2rem; // 32px
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 0.9rem; // 14px
  cursor: pointer;
`;

export const BankButton = styled.button<{ isSelected: boolean }>`
  width: 6.875rem; // 110px
  @media (max-width: 385px) {
    width: 6.25rem; // 100px
  }
  height: 5.75rem; // 92px
  cursor: pointer;
  border-radius: 12px;
  border: 1.5px solid ${({ isSelected, theme }) => (isSelected ? `${theme.color.primitive.gray[100]}` : 'none')};
  background-color: ${({theme}) => theme.color.semantic.background.normal.alternative};
  padding: 1rem; // 20px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BankImg = styled.img`
  width: 1.875rem;
  height: fit-content;
`;

export const BankName = styled.p`
  font-size: 0.9rem; // 14px
  font-weight: 400;
`;
