export const nameChipVariants = ['orange', 'alternative', 'disabled'] as const;
export const nameChipSizes = ['md', 'sm'] as const;
export type NameChipVariant = (typeof nameChipVariants)[number];
export type NameChipSize = (typeof nameChipSizes)[number];
