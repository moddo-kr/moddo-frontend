import { format } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import type { SettlementGroup } from '@/entities/group/model/group.type';

interface SettlementDateGroup {
  date: string;
  items: SettlementGroup[];
}

function groupSettlementsByDate(
  settlements: SettlementGroup[]
): SettlementDateGroup[] {
  const map = new Map<string, SettlementGroup[]>();

  settlements.forEach((item) => {
    const date = format(new Date(item.createdAt), 'yyyy년 M월 d일', {
      locale: ko,
    });
    map.set(date, [...(map.get(date) ?? []), item]);
  });

  return Array.from(map.entries()).map(([date, items]) => ({ date, items }));
}

export { groupSettlementsByDate };
export type { SettlementDateGroup };
