import {
  atomicNumberTokens,
  atomicShadowTokens,
  atomicTypographyReferenceTokens,
  atomicTypographyTokens,
  type AtomicTypographyKey,
} from '../tokens/atomic';
import {
  semanticColorTokenValues,
  semanticLayoutTokenValues,
  semanticRadiusTokenValues,
  semanticSpacingTokenValues,
  semanticTypographyTokenValues,
} from '../tokens/semantic';
import { resolveAtomicColor } from './resolveToken';
import {
  tokenPathToVarSegment,
  typographyPathToVarKey,
} from './tokenPathUtils';

/** CSS 변수 선언 한 줄을 생성. 들여쓰기(2칸)와 포맷(--name: value;)을 일괄 처리 */
function cssVarLine(name: string, value: string | number): string {
  return `  --${name}: ${value};`;
}

function buildSpacingScaleSection(): string {
  return Object.entries(atomicNumberTokens)
    .map(([key, value]) => {
      const varName = `spacing-${key}`;
      const varValue = `${value}px`;
      return cssVarLine(varName, varValue);
    })
    .join('\n');
}

function buildSpacingAliasSection(): string {
  return Object.entries(semanticSpacingTokenValues)
    .map(([path, value]) => {
      const varName = `spacing-${tokenPathToVarSegment(path)}`;
      const varValue = `var(--spacing-${value})`;
      return cssVarLine(varName, varValue);
    })
    .join('\n');
}

function buildTypographySection(): string {
  const fontFamily = atomicTypographyReferenceTokens.fontFamily.base;

  const typographyCssVarLines = Object.entries(
    semanticTypographyTokenValues
  ).flatMap(([path, atomicKey]) => {
    // Semantic typography token은 atomic typography token 조합을 참조한다.
    const token = atomicTypographyTokens[atomicKey as AtomicTypographyKey];

    const cssKey = typographyPathToVarKey(path);

    return [
      cssVarLine(`text-${cssKey}`, `${token.fontSize}px`),
      cssVarLine(`font-weight-${cssKey}`, token.fontWeight),
      cssVarLine(`leading-${cssKey}`, token.lineHeight),
      cssVarLine(`tracking-${cssKey}`, token.letterSpacing),
    ];
  });

  return [cssVarLine('font-sans', fontFamily), ...typographyCssVarLines].join(
    '\n'
  );
}

function buildLayoutSection(): string {
  return Object.entries(semanticLayoutTokenValues)
    .map(([path, value]) => {
      const varName = tokenPathToVarSegment(path);
      const varValue = `var(--spacing-${value})`;
      return cssVarLine(varName, varValue);
    })
    .join('\n');
}

function buildRadiusSection(): string {
  return Object.entries(semanticRadiusTokenValues)
    .map(([path, value]) => {
      const varName = tokenPathToVarSegment(path);
      const varValue = `${value}px`;
      return cssVarLine(varName, varValue);
    })
    .join('\n');
}

function buildShadowSection(): string {
  return Object.entries(atomicShadowTokens)
    .map(([key, { x, y, blur, spread, color }]) => {
      const varName = key.replace(/shadow(\d+)/, 'shadow-$1'); // shadow1 → shadow-1
      const varValue = `${x}px ${y}px ${blur}px ${spread}px ${color}`;
      return cssVarLine(varName, varValue);
    })
    .join('\n');
}

function buildColorSection(): string {
  return Object.entries(semanticColorTokenValues)
    .map(([path, value]) => {
      const varName = `color-${tokenPathToVarSegment(path)}`;
      const varValue = resolveAtomicColor(value);
      return cssVarLine(varName, varValue);
    })
    .join('\n');
}

function buildThemeCss(): string {
  return [
    `:root {`,
    `  /* Spacing scale */`,
    buildSpacingScaleSection(),
    ``,
    `  /* Color */`,
    buildColorSection(),
    ``,
    `  /* Spacing aliases */`,
    buildSpacingAliasSection(),
    ``,
    `  /* Radius */`,
    buildRadiusSection(),
    ``,
    `  /* Layout */`,
    buildLayoutSection(),
    ``,
    `  /* Typography */`,
    buildTypographySection(),
    ``,
    `  /* Shadow */`,
    buildShadowSection(),
    `}`,
  ].join('\n');
}

export { buildThemeCss };
