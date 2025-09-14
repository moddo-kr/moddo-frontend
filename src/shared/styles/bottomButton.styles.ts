import styled from 'styled-components';
import getColorFromTheme from '@/shared/utils/getColorFromTheme';
import { ColorKey } from './theme.type';

interface BottomButtonProps {
  $bgColor?: ColorKey;
}

export const BottomButtonContainer = styled.div<BottomButtonProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) =>
    `0 ${theme.unit[20]} ${theme.unit[16]} ${theme.unit[20]}`};
  background: ${({ theme, $bgColor }) =>
    getColorFromTheme(
      theme.color,
      $bgColor || 'semantic.background.normal.default'
    )};
`;
