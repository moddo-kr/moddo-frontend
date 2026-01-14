export const chipVariants = ['primary', 'secondary', 'disabled'] as const;

export type ChipVariant = (typeof chipVariants)[number];

export const chipSizes = ['md', 'sm'] as const;

export type ChipSize = (typeof chipSizes)[number];
