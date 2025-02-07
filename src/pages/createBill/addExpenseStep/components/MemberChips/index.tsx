import Chip from '@/common/components/Chip';
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
        <Chip
          key={member.id}
          label={member.name}
          closable
          onClose={() => onDelete(member.name)}
        />
      ))}
    </S.ChipContainer>
  );
}

export default MemberChips;
