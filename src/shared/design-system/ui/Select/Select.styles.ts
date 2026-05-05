import styled, { css } from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

const applyTypography = (key: Parameters<typeof getTypographyToken>[0]) => {
  const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
    getTypographyToken(key);

  return css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
};

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  align-items: flex-end;
`;

export const TriggerLabel = styled.span`
  ${applyTypography('typography.body.small')}
  color: ${getToken('fg.assistive')};
  white-space: nowrap;
`;

export const ChevronWrapper = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getToken('fg.assistive')};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
`;

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.1')};
  background: transparent;
  border: none;
  padding: 0 ${getToken('gap.2')};
  border-radius: ${getToken('radius.xs')};
  cursor: pointer;

  &:active {
    background: ${getToken('fill.normal-pressed')};
  }
  &:active ${TriggerLabel} {
    color: ${getToken('fg.alternative')};
  }
  &:active ${ChevronWrapper} {
    color: ${getToken('fg.alternative')};
  }
`;

export const DropdownPanel = styled.div`
  position: absolute;
  top: calc(100% + ${getToken('gap.3')});
  right: 0;
  width: max-content;
  background: ${getToken('fill.normal')};
  border: 1px solid ${getToken('border.alternative')};
  border-radius: ${getToken('radius.md')};
  padding: ${getToken('padding.3')};
  /* HACK: shadow2(0px 4px 8px rgba(0,0,0,0.12)) 매핑되는 shadow 시맨틱 토큰 없음 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  z-index: 10;
`;

export const OptionItem = styled.button`
  display: flex;
  align-items: space-between;
  gap: ${getToken('gap.6')};
  width: 100%;
  padding: ${getToken('padding.3')};
  border-radius: ${getToken('radius.sm')};
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover,
  &:active {
    background: ${getToken('fill.normal-pressed')};
  }
`;

export const OptionLabel = styled.span<{ $isSelected: boolean }>`
  ${({ $isSelected }) =>
    $isSelected
      ? applyTypography('typography.body.small-semibold')
      : applyTypography('typography.body.small')}
  /* HACK: 기본 옵션 텍스트 #1D1D1D(gray/gray-90)은 fg.normal(gray.10, #202225)로 근사 처리 */
  color: ${({ $isSelected }) =>
    $isSelected ? getToken('fg.primary.normal') : getToken('fg.normal')};
  flex: 1;
  min-width: 0;
  text-align: left;
  white-space: nowrap;
`;

export const ConfirmIconWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${getToken('fg.primary.normal')};

  svg path {
    stroke: currentColor;
  }
`;
