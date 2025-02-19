import getColorFromTheme from '@/common/utils/getColorFromTheme';
import { ColorKey, TypographyKey } from '@/styles/theme.type';
import styled, { css } from 'styled-components';

export const TextVariant = (variant: TypographyKey) => css`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize[variant]};
  font-weight: ${({ theme }) => theme.typography.fontWeight[variant]};
  line-height: ${({ theme }) => theme.typography.lineHeight[variant]};
  letter-spacing: ${({ theme }) =>
    theme.typography.letterSpacing.typoFontSpacing0};
`;

interface StyledTextProps {
  $variant: TypographyKey;
  $color: ColorKey;
}

export const Text = styled.span<StyledTextProps>`
  ${({ $variant }) => TextVariant($variant)};
  color: ${({ theme, $color }) =>
    getColorFromTheme(theme.color, $color) ?? 'inherit'};
`;
