import styled, { css } from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';
import type { ProfileSize } from './Profile';

const iconSizeMap: Record<ProfileSize, string> = {
  s: '1.25rem', // 20px
  m: '1.5rem', // 24px
  L: '1.5rem', // 24px
};

const imageSizeMap: Record<ProfileSize, string> = {
  s: '36px',
  m: '48px',
  L: '68px',
};

const applyLabelTypography = (size: ProfileSize) => {
  const key =
    size === 's'
      ? 'typography.caption.small-medium'
      : 'typography.body.small-medium';
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
  flex-direction: column;
  align-items: center;
  gap: ${getToken('gap.2')};
  padding-top: ${getToken('padding.3')};
  padding-bottom: ${getToken('padding.3')};
`;

export const ImageWrapper = styled.div<{ $size: ProfileSize }>`
  position: relative;
  width: ${({ $size }) => imageSizeMap[$size]};
  height: ${({ $size }) => imageSizeMap[$size]};
  flex-shrink: 0;
`;

const iconPositionStyle = css<{ $size: ProfileSize }>`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: ${({ $size }) => iconSizeMap[$size]};
  height: ${({ $size }) => iconSizeMap[$size]};
`;

export const DeleteButton = styled.button<{ $size: ProfileSize }>`
  ${iconPositionStyle}
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const CheckedIcon = styled.div<{ $size: ProfileSize }>`
  ${iconPositionStyle}
`;

export const DimOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${getToken('fill.normal')};
  border-radius: ${getToken('radius.full')};
  opacity: 0.5;
`;

export const Label = styled.span<{ $size: ProfileSize }>`
  ${({ $size }) => applyLabelTypography($size)}
  color: ${getToken('fg.neutral')};
  text-align: center;
  white-space: nowrap;
`;
