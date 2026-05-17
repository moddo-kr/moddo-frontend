const semanticRadiusTokenValues = {
  'radius.xs': 4,
  'radius.sm': 6,
  'radius.md': 8,
  'radius.lg': 12,
  'radius.xl': 16,
  'radius.full': 200,
} as const;

type SemanticRadiusKey = keyof typeof semanticRadiusTokenValues;
type SemanticRadiusValue =
  (typeof semanticRadiusTokenValues)[SemanticRadiusKey];

export { semanticRadiusTokenValues };
export type { SemanticRadiusKey, SemanticRadiusValue };
