import type { AtomicNumberKey } from '../atomic';

const semanticLayoutTokenValues = {
  'layout.gap.y-nav-to-content': 24,
  'layout.gap.y-nav-to-title': 8,
} as const satisfies Record<string, AtomicNumberKey>;

type SemanticLayoutKey = keyof typeof semanticLayoutTokenValues;
type SemanticLayoutValue =
  (typeof semanticLayoutTokenValues)[SemanticLayoutKey];

export { semanticLayoutTokenValues };
export type { SemanticLayoutKey, SemanticLayoutValue };
