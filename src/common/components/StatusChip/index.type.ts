// NOTE : @/common/types 폴더로 이동시켜야 할 수도 있음.

export const paymentStatus = ['paid', 'unpaid'] as const;

export type PaymentStatus = (typeof paymentStatus)[number];
