import { CSSProperties } from 'react';
import getColorFromTheme from '@/common/utils/getColorFromTheme';
import { ColorKey, TypographyKey } from '@/styles/theme.type';
import styled, { css } from 'styled-components';

export const TextVariant = (variant: TypographyKey) => css`
  font-size: ${({ theme }) => theme.typography.fontSize[variant]};
  font-weight: ${({ theme }) => theme.typography.fontWeight[variant]};
  line-height: ${({ theme }) => theme.typography.lineHeight[variant]};
  letter-spacing: ${({ theme }) =>
    theme.typography.letterSpacing.typoFontSpacing0};
`;

interface StyledTextProps {
  $variant: TypographyKey;
  $color: ColorKey;
  $textAlign?: CSSProperties['textAlign'];
}

export const Text = styled.span<StyledTextProps>`
  ${({ $variant }) => TextVariant($variant)};
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  color: ${({ theme, $color }) =>
    getColorFromTheme(theme.color, $color) ?? 'inherit'};
`;
