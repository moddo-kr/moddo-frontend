export const paymentStatus = ['paid', 'unpaid'] as const;

export type PaymentStatus = (typeof paymentStatus)[number];
