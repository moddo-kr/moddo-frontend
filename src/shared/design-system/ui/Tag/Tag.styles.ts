import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.2')};
  background: ${getToken('fill.neutral')};
  border-radius: ${getToken('radius.full')};
  white-space: nowrap;
  /* HACK: py 5px, h 32px에 해당하는 토큰 없음. rem 단위로 하드코딩. */
  padding: 0.3125rem ${getToken('padding.4')};
  height: 2rem;
`;

export const Label = styled.span`
  ${applyTypography('typography.caption.xsmall')}
  color: ${getToken('fg.neutral')};
`;

export const CloseButton = styled.button`
  /* HACK: 현재 버튼 터치 영역이 WCAG 2.5.8(AA) 최솟값 미달으로 접근성 이슈가 있음
     터치 타겟 확장은 디자이너와 논의 후 반영.
     Review: https://github.com/moddo-kr/moddo-frontend/pull/42#discussion_r3194789904
  */
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${getToken('fg.neutral')};
  width: 0.75rem;
  height: 0.75rem;

  /* HACK: focus ring에 대응하는 semantic token 없음, fg.neutral 사용 */
  &:focus-visible {
    outline: 2px solid ${getToken('fg.neutral')};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
