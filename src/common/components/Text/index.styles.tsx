import getColor from '@/common/utils/getColor';
import { ColorTokenType, TypographyKey } from '@/styles/theme.type';
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
  $color: ColorTokenType;
}

export const Text = styled.span<StyledTextProps>`
  ${({ $variant }) => TextVariant($variant)};
  color: ${({ theme, $color }) => getColor(theme.color, $color) ?? 'inherit'};
`;
