import type { AtomicTypographyKey } from '../atomic';

const semanticTypographyTokenValues = {
  'typography.heading.medium': 'heading.medium',
  'typography.heading.small': 'heading.small',
  'typography.title.medium': 'title.medium',
  'typography.title.small': 'title.small',
  'typography.body.medium': 'body.medium',
  'typography.body.small': 'body.small',
  'typography.body.medium-semibold': 'body.medium-semibold',
  'typography.body.small-medium': 'body.small-medium',
  'typography.body.small-semibold': 'body.small-semibold',
  'typography.caption.small': 'caption.small',
  'typography.caption.small-medium': 'caption.small-medium',
  'typography.caption.xsmall': 'caption.xsmall',
} as const satisfies Record<string, AtomicTypographyKey>;

type SemanticTypographyKey = keyof typeof semanticTypographyTokenValues;
type SemanticTypographyValue = AtomicTypographyKey;

export { semanticTypographyTokenValues };
export type { SemanticTypographyKey, SemanticTypographyValue };
