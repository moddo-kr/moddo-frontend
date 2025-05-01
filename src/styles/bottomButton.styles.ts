import styled from 'styled-components';
import getColor from '@/common/utils/getColor';
import { ColorTokenType } from './theme.type';

interface BottomButtonProps {
  $bgColor?: ColorTokenType;
}

export const BottomButtonContainer = styled.div<BottomButtonProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) =>
    `0 ${theme.unit[20]} ${theme.unit[16]} ${theme.unit[20]}`};
  background: ${({ theme, $bgColor }) =>
    getColor(theme.color, $bgColor || 'semantic.background.normal.default')};
`;
