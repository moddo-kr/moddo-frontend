import Tag from '@/common/components/Tag';
import { ExpenseFormMember } from '@/pages/createBill/types/expense.type2';
import * as S from './index.styles';

interface MemberChipsProps {
  members: ExpenseFormMember[];
  onDelete: (name: string) => void;
}

function MemberChips({ members, onDelete }: MemberChipsProps) {
  return (
    <S.ChipContainer>
      {members.map((member) => (
        <Tag
          key={member.memberId}
          label={member.name}
          onClose={() => onDelete(member.name)}
        />
      ))}
    </S.ChipContainer>
  );
}

export default MemberChips;
