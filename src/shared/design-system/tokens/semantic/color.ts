import type { AtomicColorKey } from '../atomic';

type SemanticColorValue = AtomicColorKey;

const semanticColorTokenValues = {
  // Foreground
  'fg.strong': 'gray.5',
  'fg.normal': 'gray.10',
  'fg.neutral': 'gray.30',
  'fg.alternative': 'gray.60',
  'fg.assistive': 'gray.70',
  'fg.normal-disable': 'gray.75',
  'fg.primary.normal': 'orange.50',
  'fg.static-white': 'common.100',
  'fg.static-black': 'gray.5',
  'fg.inverse.normal': 'common.100',
  'fg.inverse.neutral': 'gray.98',
  'fg.accent-red.normal': 'red.50',
  'fg.accent-green.normal': 'green.50',
  'fg.accent-yellow.normal': 'yellow.50',
  'fg.accent-blue.normal': 'blue.50',

  // Fill
  'fill.normal': 'common.100',
  'fill.neutral': 'coolGray.98',
  'fill.alternative': 'coolGray.95',
  'fill.normal-pressed': 'coolGray.98',
  'fill.normal-disable': 'gray.95',
  'fill.neutral-pressed': 'coolGray.90',
  'fill.primary.normal': 'orange.50',
  'fill.primary.normal-pressed': 'orange.40',
  'fill.primary.neutral': 'orange.60',
  'fill.primary.assistive': 'orange.95',
  'fill.accent-green.normal': 'green.50',
  'fill.accent-green.assistive': 'green.95',
  'fill.accent-red.normal': 'red.50',
  'fill.accent-red.assistive': 'red.95',
  'fill.accent-yellow.normal': 'yellow.50',
  'fill.accent-yellow.assistive': 'yellow.95',
  'fill.accent-blue.normal': 'blue.50',
  'fill.accent-blue.assistive': 'blue.95',
  'fill.inverse.normal': 'gray.10',
  'fill.inverse.neutral': 'gray.40',
  'fill.inverse.alternative': 'gray.60',

  // Border
  'border.normal': 'gray.90',
  'border.strong': 'gray.70',
  'border.neutral': 'gray.92',
  'border.alternative': 'gray.95',
  'border.primary.normal': 'orange.50',

  // Background
  'bg.normal': 'common.100',
  'bg.neutral': 'coolGray.98',
  'bg.dim': 'common.0',
} as const satisfies Record<string, SemanticColorValue>;

type SemanticColorKey = keyof typeof semanticColorTokenValues;

export { semanticColorTokenValues };
export type { SemanticColorKey, SemanticColorValue };
