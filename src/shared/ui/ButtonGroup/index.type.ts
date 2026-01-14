export const buttonGroupDirection = ['horizontal', 'vertical'] as const;

export type ButtonGroupDirection = (typeof buttonGroupDirection)[number];
