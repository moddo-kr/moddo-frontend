import styled from 'styled-components';
import { TitleText } from '../groupSetup/index.styles';

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
  width: 50%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  height: 12rem; // 192px
  background-color: #f5f5f5;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 600;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem; // 12px
`;