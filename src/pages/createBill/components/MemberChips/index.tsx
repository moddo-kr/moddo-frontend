import Tag from '@/common/components/Tag';
import { ExpenseMember } from '@/pages/createBill/types/expense.type';
import * as S from './index.styles';

interface MemberChipsProps {
  members: ExpenseMember[];
  onDelete: (name: string) => void;
}

function MemberChips({ members, onDelete }: MemberChipsProps) {
  return (
    <S.ChipContainer>
      {members.map((member: ExpenseMember) => (
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
