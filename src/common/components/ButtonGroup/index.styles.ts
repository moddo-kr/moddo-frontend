import styled from 'styled-components';
import { ButtonGroupDirection } from './index.type';

export const Wrapper = styled.div<{ $direction: ButtonGroupDirection }>`
  display: grid;
  ${({ $direction }) =>
    $direction === 'horizontal'
      ? `grid-template-columns: repeat(auto-fit, minmax(0, 1fr));` // 가능한 만큼의 열을 균등하게 분배
      : `grid-template-rows: repeat(auto-fit, minmax(0, auto));`} // 가능한 만큼의 행을 균등하게 분배
  gap: ${({ theme, $direction }) =>
    $direction === 'horizontal' ? theme.unit[12] : theme.unit[8]};
`;
