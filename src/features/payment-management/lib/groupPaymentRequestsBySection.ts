import { format, isSameDay, startOfDay, subDays } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import type { PaymentRequest } from '@/entities/payment/model/payment.type';

const SECTION_LABEL = {
  TODAY: '오늘',
  YESTERDAY: '어제',
} as const;

const DATE_FORMAT = 'M/d(eee)';

function getSectionLabel(requestedAt: string): string {
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

export function groupPaymentRequestsBySection(
  payments: PaymentRequest[]
): PaymentSection[] {
  const bucket = new Map<string, PaymentRequest[]>();

  for (const payment of payments) {
    const label = getSectionLabel(payment.requestedAt);
    const list = bucket.get(label) ?? [];
    list.push(payment);
    bucket.set(label, list);
  }

  const FIXED: string[] = [SECTION_LABEL.TODAY, SECTION_LABEL.YESTERDAY];

  return [...bucket.entries()]
    .map(([label, items]) => ({
      label,
      items: items.sort(
        (a, b) =>
          new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime()
      ),
    }))
    .sort((a, b) => {
      const ai = FIXED.indexOf(a.label);
      const bi = FIXED.indexOf(b.label);
      if (ai !== -1 || bi !== -1) return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi);
      return (
        new Date(b.items[0].requestedAt).getTime() -
        new Date(a.items[0].requestedAt).getTime()
      );
    });
}
