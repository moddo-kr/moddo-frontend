import Button from '@/shared/ui/Button';
import styled from 'styled-components';

export const DrawerHeader = styled.h2`
  font-size: 1.25rem; // 20px
  font-weight: 700;
  padding-bottom: 1.75rem;
`;

export const DrawerBody = styled.div`
  height: 55dvh;
  overflow-y: auto;
  width: 100%;
  padding-bottom: 4rem;
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

export const FadeOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 15dvh;
  background: linear-gradient(to top, #fff 60%, rgba(255, 255, 255, 0) 100%);
  z-index: 1;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: fit-content;
  width: 100%;
  padding: 0 0.75rem;
  display: flex;
  align-items: flex-end;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-bottom: 0.9rem; // 14px
  cursor: pointer;
  position: relative;
  margin-top: auto;
  z-index: 1;
`;

export const BankButton = styled.button<{ isSelected: boolean }>`
  width: 6.875rem; // 110px
  @media (max-width: 385px) {
    width: 6.25rem; // 100px
  }
  height: 5.75rem; // 92px
  cursor: pointer;
  border-radius: 12px;
  border: 2px solid
    ${({ isSelected, theme }) =>
      isSelected ? `${theme.color.semantic.orange.default}` : 'none'};
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
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
