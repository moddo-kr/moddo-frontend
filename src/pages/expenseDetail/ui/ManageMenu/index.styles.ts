import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const TriggerButton = styled.button`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.assistive')};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const MenuCard = styled.div`
  position: fixed;
  top: 56px; /* 헤더 높이 */
  /* 앱 Wrapper max-width(600px) 기준, 콘텐츠 우측 끝에서 20px 안쪽으로 정렬 */
  right: max(20px, calc((100vw - 600px) / 2 + 20px));
  width: 140px;
  background: ${getToken('bg.normal')};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 9998;
`;

export const MenuItemButton = styled.button`
  ${applyTypography('typography.body.medium')}
  color: ${getToken('fg.assistive')};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;

  &:disabled {
    cursor: default;
  }

  &:hover,
  &:active {
    /* HACK: Figma --text/strong(#292c30 = gray.20)에 대응하는 token 없음, 의미상 동일한 'fg.strong' 사용 */
    color: ${getToken('fg.strong')};
    ${applyTypography('typography.body.medium-semibold')}
  }
`;
