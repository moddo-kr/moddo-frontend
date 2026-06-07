import styled, { css } from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${getToken('gap.4')};
  width: 100%;
`;

export const Label = styled.span`
  ${applyTypography('typography.body.small-semibold')}
  color: ${getToken('fg.neutral')};
`;

export const TriggerWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const Trigger = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  width: 100%;
  padding: ${getToken('padding.4')} ${getToken('padding.5')};
  background: ${getToken('fill.normal')};
  border-radius: ${getToken('radius.lg')};
  cursor: pointer;
  ${({ $isOpen }) =>
    $isOpen
      ? css`
          border: 2px solid ${getToken('border.primary.normal')};
        `
      : css`
          border: 1px solid ${getToken('border.neutral')};
        `}
`;

export const ValueText = styled.span<{ $isPlaceholder: boolean }>`
  flex: 1;
  min-width: 0;
  text-align: left;
  ${applyTypography('typography.body.medium')}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ $isPlaceholder }) =>
    $isPlaceholder
      ? css`
          color: ${getToken('fg.assistive')};
          opacity: 0.5;
        `
      : css`
          color: ${getToken('fg.normal')};
        `}
`;

export const ChevronWrapper = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${getToken('fg.assistive')};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
`;

export const Panel = styled.div`
  position: absolute;
  top: calc(100% + ${getToken('gap.3')});
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.1')};
  background: ${getToken('fill.normal')};
  border: 1px solid ${getToken('border.alternative')};
  border-radius: ${getToken('radius.md')};
  padding: ${getToken('padding.3')};
  /* HACK: shadow2(0px 4px 8px rgba(0,0,0,0.12)) 매핑되는 shadow 시맨틱 토큰 없음 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  /* HACK: 옵션이 많을 때 패널이 넘치지 않도록 max-height 제한. 대응 토큰 없어 직접 사용. */
  max-height: 240px;
  overflow-y: auto;
  z-index: 10;
`;

export const OptionItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      ? applyTypography('typography.body.medium-semibold')
      : applyTypography('typography.body.medium')}
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
