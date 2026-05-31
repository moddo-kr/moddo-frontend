import {
  semanticColorTokenValues,
  semanticLayoutTokenValues,
  semanticRadiusTokenValues,
  semanticSpacingTokenValues,
  type SemanticColorKey,
  type SemanticLayoutKey,
  type SemanticRadiusKey,
  type SemanticSpacingKey,
} from '../tokens/semantic';
import { tokenPathToVarSegment } from './tokenPathUtils';

type SemanticTokenKey =
  | SemanticColorKey
  | SemanticSpacingKey
  | SemanticRadiusKey
  | SemanticLayoutKey;

type SemanticTokenValue = string;

function createColorCssVarEntries(): [SemanticColorKey, string][] {
  return Object.keys(semanticColorTokenValues).map((path) => {
    const varName = `color-${tokenPathToVarSegment(path)}`;
    return [path as SemanticColorKey, `var(--${varName})`];
  });
}

function createSpacingCssVarEntries(): [SemanticSpacingKey, string][] {
  return Object.keys(semanticSpacingTokenValues).map((path) => {
    const varName = `spacing-${tokenPathToVarSegment(path)}`;
    return [path as SemanticSpacingKey, `var(--${varName})`];
  });
}

function createRadiusCssVarEntries(): [SemanticRadiusKey, string][] {
  return Object.keys(semanticRadiusTokenValues).map((path) => {
    const varName = tokenPathToVarSegment(path);
    return [path as SemanticRadiusKey, `var(--${varName})`];
  });
}

function createLayoutCssVarEntries(): [SemanticLayoutKey, string][] {
  return Object.keys(semanticLayoutTokenValues).map((path) => {
    const varName = tokenPathToVarSegment(path);
    return [path as SemanticLayoutKey, `var(--${varName})`];
  });
}

const semanticTokens: Record<SemanticTokenKey, SemanticTokenValue> =
  Object.fromEntries([
    ...createColorCssVarEntries(),
    ...createSpacingCssVarEntries(),
    ...createRadiusCssVarEntries(),
    ...createLayoutCssVarEntries(),
  ]) as Record<SemanticTokenKey, SemanticTokenValue>;

function getToken(key: SemanticTokenKey): SemanticTokenValue {
  return semanticTokens[key];
}

export { getToken };
export type { SemanticTokenKey, SemanticTokenValue };
