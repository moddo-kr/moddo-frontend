import getColorFromTheme from '@/common/utils/getColorFromTheme';
import { ColorKey, TypographyKey } from '@/styles/theme.type';
import styled from 'styled-components';

interface StyledTextProps {
  variant: TypographyKey;
  color: ColorKey;
}

export const Text = styled.span<StyledTextProps>(
  ({ theme, variant, color }) => ({
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize[variant],
    fontWeight: theme.typography.fontWeight[variant],
    lineHeight: theme.typography.lineHeight[variant],
    letterSpacing: theme.typography.letterSpacing.typoFontSpacing0,
    color: getColorFromTheme(theme.color, color) ?? 'inherit',
  })
);
