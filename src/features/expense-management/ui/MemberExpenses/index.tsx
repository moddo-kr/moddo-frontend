import NumberInput from '@/features/expense-management/ui/NumberInput';
import { ExpenseFormMember } from '@/entities/expense/model/expense.type';
import Profile from '@/shared/ui/Profile';
import * as S from './index.styles';

interface MemberExpensesProps {
  members: ExpenseFormMember[];
  onDelete: (name: string) => void;
}

function MemberExpenses({ members, onDelete }: MemberExpensesProps) {
  return (
    <S.MemberExpensesContainer>
      {members.map((member) => (
        <S.MemberContainer key={member.id}>
          <S.ProfileContainer>
            <Profile
              id={member.id}
              name={member.name}
              imageSrc={member.profile}
              type="delete"
              onDelete={() => onDelete(member.name)}
            />
          </S.ProfileContainer>
          <NumberInput
            value={member.amount ? member.amount.toLocaleString() : ''}
            readOnly
            variant="sm"
            placeholder="금액 입력"
          />
        </S.MemberContainer>
      ))}
    </S.MemberExpensesContainer>
  );
}

export default MemberExpenses;
