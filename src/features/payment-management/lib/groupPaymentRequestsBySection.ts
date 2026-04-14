import { format, isSameDay, startOfDay, subDays } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import type { PaymentRequest } from '@/entities/payment/model/payment.type';

const SECTION_LABEL = {
  TODAY: '오늘',
  YESTERDAY: '어제',
} as const;

const DATE_FORMAT = 'M/d(eee)';
const DATE_KEY_FORMAT = 'yyyy-MM-dd';

export function getSectionLabel(requestedAt: string): string {
  const date = new Date(requestedAt);
  const today = startOfDay(new Date());
  if (isSameDay(date, today)) return SECTION_LABEL.TODAY;
  if (isSameDay(date, subDays(today, 1))) return SECTION_LABEL.YESTERDAY;
  return format(date, DATE_FORMAT, { locale: ko });
}

export interface PaymentSection {
  label: string;
  items: PaymentRequest[];
}

export function groupPaymentRequestsByDate(
  payments: PaymentRequest[]
): PaymentSection[] {
  const paymentMapByDay = payments.reduce((acc, payment) => {
    const dayKey = format(new Date(payment.requestedAt), DATE_KEY_FORMAT);
    const section = acc.get(dayKey) ?? {
      label: getSectionLabel(payment.requestedAt),
      items: [],
    };
    section.items.push(payment);
    acc.set(dayKey, section);
    return acc;
  }, new Map<string, PaymentSection>());

  return [...paymentMapByDay.values()];
}
