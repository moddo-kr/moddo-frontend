import styled, { css } from 'styled-components';
import {
  getToken,
  getTypographyToken,
  applyTypography,
} from '@/shared/design-system';

interface StyledNameChipProps {
  $variant: 'selected' | 'unselected' | 'disabled' | 'red' | 'black';
  $size: 'm' | 's';
  $clickable?: boolean;
}

// HACK: s size는 12px Medium이지만 해당 semantic token 없음.
// caption.xsmall을 적용한 뒤 caption.small-medium의 font-weight만 override해 적용.
const sTypography = css`
  ${applyTypography('typography.caption.xsmall')}
  font-weight: ${getTypographyToken('typography.caption.small-medium')
    .fontWeight};
`;

const sizeStyles = {
  m: css`
    padding: ${getToken('padding.3')} ${getToken('padding.4')};
    ${applyTypography('typography.body.small')}
  `,
  s: css`
    padding: ${getToken('padding.2')} ${getToken('padding.4')};
    ${sTypography}
  `,
};

const variantStyles = {
  selected: css`
    background: ${getToken('fill.primary.normal')};
    color: ${getToken('fg.static-white')};
  `,
  unselected: css`
    background: ${getToken('fill.neutral')};
    color: ${getToken('fg.normal')};
  `,
  disabled: css`
    background: ${getToken('fill.normal-disable')};
    color: ${getToken('fg.normal-disable')};
  `,
  red: css`
    background: ${getToken('fill.accent-red.assistive')};
    color: ${getToken('fg.accent-red.normal')};
  `,
  black: css`
    background: ${getToken('fill.inverse.neutral')};
    color: ${getToken('fg.inverse.normal')};
  `,
};

export const Chip = styled.div<StyledNameChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.1')};
  border-radius: ${getToken('radius.full')};
  white-space: nowrap;
  ${({ $clickable }) =>
    $clickable &&
    css`
      border: none;
      cursor: pointer;
    `}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
`;
