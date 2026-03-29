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
  // 날짜별로 그룹화 및 라벨 생성
  const paymentMapByDay = payments.reduce((acc, payment) => {
    const label = getSectionLabel(payment.requestedAt);
    const list = acc.get(label) ?? [];
    acc.set(label, [...list, payment]);
    return acc;
  }, new Map<string, PaymentRequest[]>());
  // map을 배열로 변환하여 반환
  return [...paymentMapByDay.entries()].map(([label, items]) => ({
    label,
    items,
  }));
}
