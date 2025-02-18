export const buttonVariants = [
  'primary',
  'secondary',
  'tertiary',
  'text',
] as const;

export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonSizes = ['md', 'sm'] as const;

export type ButtonSize = (typeof buttonSizes)[number];
