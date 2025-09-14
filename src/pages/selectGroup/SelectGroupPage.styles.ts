import styled from 'styled-components';
import { TitleText } from '@/pages/groupSetup/GroupSetupPage.styles';

export const H1 = styled(TitleText)`
  padding-bottom: 5.5rem; // 88px
`;

export const SmallContent = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const MainContent = styled.span`
  font-size: 1.5rem; // 24px
  font-weight: 600;
`;

export const SelectButton = styled.button<{ selected: boolean }>`
  width: 100%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  height: 6rem;
  background-color: ${({ theme, selected }) =>
    selected ? theme.color.semantic.orange.default : '#fff'};
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
