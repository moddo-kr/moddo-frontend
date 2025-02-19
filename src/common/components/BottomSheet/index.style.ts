import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const BottomSheetWrapper = styled(animated.div)<{
  pb?: number;
  isPadding: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.color.primitive.base.white};
  color: ${({ theme }) => theme.color.semantic.text.default};
  /* isPadding이 true일 경우 padding을 설정, false일 경우 padding을 제거 */
  padding: ${({ isPadding, theme }) =>
    isPadding
      ? `${theme.unit[32]} ${theme.unit[20]} 0 ${theme.unit[20]}`
      : '0'};

  /* padding-bottom은 isPadding이 true일 경우 활성화, false일 경우 기본값으로 설정 */
  padding-bottom: ${({ pb, isPadding, theme }) =>
    isPadding ? (pb ? `${theme.unit[pb]}` : `${theme.unit[20]}`) : '0'};
  border-radius: ${({ theme }) =>
    `${theme.radius.default} ${theme.radius.default} 0 0`};
  z-index: 9999;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 37.5rem;
  height: fit-content;
`;
