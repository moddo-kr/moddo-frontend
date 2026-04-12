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
  date: string;
  items: PaymentRequest[];
}

export function groupPaymentRequestsBySection(
  payments: PaymentRequest[]
): PaymentSection[] {
  // 정규화된 날짜(yyyy-MM-dd)를 키로 그룹화
  const paymentMapByDay = payments.reduce((acc, payment) => {
    const key = format(new Date(payment.requestedAt), DATE_KEY_FORMAT);
    const list = acc.get(key) ?? [];
    acc.set(key, [...list, payment]);
    return acc;
  }, new Map<string, PaymentRequest[]>());
  // map을 배열로 변환하여 반환
  return [...paymentMapByDay.entries()].map(([date, items]) => ({
    date,
    items,
  }));
}
