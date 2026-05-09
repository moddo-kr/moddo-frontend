import type { SettlementGroup } from '@/entities/group/model/group.type';
import { SettlementProgressCard } from '../SettlementProgressCard';
import * as S from './SettlementDateSection.styles';

interface SettlementDateSectionProps {
  date: string;
  items: SettlementGroup[];
}

function SettlementDateSection({ date, items }: SettlementDateSectionProps) {
  return (
    <S.Section>
      <S.Date>{date}</S.Date>
      <S.CardList>
        {items.map((item) => (
          <SettlementProgressCard
            key={item.groupId}
            groupCode={item.groupCode}
            groupName={item.name}
            totalAmount={item.totalAmount}
            paidMember={item.completedMemberCount}
            totalMember={item.totalMemberCount}
          />
        ))}
      </S.CardList>
    </S.Section>
  );
}

export { SettlementDateSection };
export type { SettlementDateSectionProps };
