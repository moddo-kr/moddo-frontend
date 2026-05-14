import styled, { css } from 'styled-components';
import { getToken } from '@/shared/design-system';
import { Button } from '../Button';

interface StyledActionProps {
  $type: 'horizontal' | 'vertical';
}

interface StyledContentsProps {
  $hasHorizontalPadding: boolean;
}

interface StyledContainerProps {
  $position: 'static' | 'bottom-fixed';
}

export const Container = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${getToken('padding.5')};
  width: 100%;

  ${({ $position }) =>
    $position === 'bottom-fixed' &&
    css`
      position: fixed;
      left: 50%;
      bottom: 0;
      z-index: 9996;
      max-width: 600px;
      min-width: 320px;
      transform: translateX(-50%);
      pointer-events: none;
    `}
`;

export const Contents = styled.div<StyledContentsProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  ${({ $hasHorizontalPadding }) =>
    $hasHorizontalPadding
      ? css`
          padding: 0 ${getToken('padding.5')};
        `
      : css`
          padding: 0;
        `}
`;

export const Actions = styled.div<StyledActionProps>`
  display: flex;
  gap: ${getToken('gap.4')};
  align-items: flex-start;
  width: 100%;
  ${({ $type }) =>
    $type === 'vertical'
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}
`;

export const MainActionWrapper = styled.div<StyledActionProps>`
  > * {
    width: 100%;
  }
  ${({ $type }) =>
    $type === 'vertical'
      ? css`
          width: 100%;
        `
      : css`
          flex: 1;
          min-width: 0;
          order: 2; /* horizontal일 때 subAction(left)이 mainAction(right)보다 앞에 오도록 */
        `}
`;

export const AlternativeButton = styled(Button)`
  color: ${getToken('fg.alternative')};
`;

export const SubActionWrapper = styled.div<StyledActionProps>`
  ${({ $type }) =>
    $type === 'vertical'
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 3rem;
        `
      : css`
          flex: 1;
          min-width: 0;
          order: 1; /* mainAction보다 작은 order 값으로 왼쪽에 배치하기 위한 속성 */
          > * {
            width: 100%;
          }
        `}
`;
