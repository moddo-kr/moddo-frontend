import getColorFromTheme from '@/common/utils/getColorFromTheme';
import { ColorKey } from '@/styles/theme.type';
import styled from 'styled-components';

interface WrapperProps {
  $bgColor?: ColorKey;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  padding: ${({ theme }) => `${theme.unit[10]} ${theme.unit[20]}`};
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[4]};
  white-space: pre-line;
  background-color: ${({ theme, $bgColor }) =>
    getColorFromTheme(
      theme.color,
      $bgColor || 'semantic.background.normal.default'
    )};
`;
