export const alertType = ['info', 'danger', 'warning', 'success'] as const;
export type AlertType = (typeof alertType)[number];

export const alertVariant = ['colored', 'white'] as const;
export type AlertVariant = (typeof alertVariant)[number];
