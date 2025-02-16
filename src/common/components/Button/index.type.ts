export const buttonVariants = ['primary', 'secondary', 'tertiary'] as const;

export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonSizes = ['md', 'sm', 'icon'] as const;

export type ButtonSize = (typeof buttonSizes)[number];
