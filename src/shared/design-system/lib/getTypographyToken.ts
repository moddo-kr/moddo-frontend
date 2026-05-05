import {
  semanticTypographyTokenValues,
  type SemanticTypographyKey,
} from '../tokens/semantic';
import { typographyPathToVarKey } from './tokenPathUtils';

interface TypographyTokenValue {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing: string;
}

const typographyTokens: Record<SemanticTypographyKey, TypographyTokenValue> =
  Object.fromEntries(
    Object.keys(semanticTypographyTokenValues).map((path) => {
      const cssKey = typographyPathToVarKey(path);
      const tokenValue: TypographyTokenValue = {
        fontFamily: 'var(--font-sans)',
        fontSize: `var(--text-${cssKey})`,
        fontWeight: `var(--font-weight-${cssKey})`,
        lineHeight: `var(--leading-${cssKey})`,
        letterSpacing: `var(--tracking-${cssKey})`,
      };
      return [path as SemanticTypographyKey, tokenValue];
    })
  ) as Record<SemanticTypographyKey, TypographyTokenValue>;

function getTypographyToken(key: SemanticTypographyKey): TypographyTokenValue {
  return typographyTokens[key];
}

export { getTypographyToken };
export type { TypographyTokenValue };
