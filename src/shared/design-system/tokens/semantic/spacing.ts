import type { AtomicNumberKey } from '../atomic';

const semanticSpacingTokenValues = {
  'gap.1': 2,
  'gap.2': 4,
  'gap.3': 6,
  'gap.4': 8,
  'gap.5': 12,
  'gap.6': 16,
  'gap.7': 20,
  'gap.8': 24,

  'padding.1': 2,
  'padding.2': 4,
  'padding.3': 8,
  'padding.4': 12,
  'padding.5': 16,
  'padding.6': 20,
} as const satisfies Record<string, AtomicNumberKey>;

type SemanticSpacingKey = keyof typeof semanticSpacingTokenValues;
type SemanticSpacingValue =
  (typeof semanticSpacingTokenValues)[SemanticSpacingKey];

export { semanticSpacingTokenValues };
export type { SemanticSpacingKey, SemanticSpacingValue };
