import { SystemDanger } from '@/assets/svgs/icon';
import NumberInput from '@/common/components/NumberInput';
import { ExpenseFormMember } from '@/pages/createBill/types/expense.type2';
import * as S from './index.styles';

interface MemberExpensesProps {
  members: ExpenseFormMember[];
  onDelete: (name: string) => void;
}

function MemberExpenses({ members, onDelete }: MemberExpensesProps) {
  return (
    <S.MemberExpensesContainer>
      {members.map((member) => (
        <S.MemberContainer key={member.memberId}>
          <S.ProfileWrapper>
            <S.ProfileImg
              src={member.profile}
              alt={`${member.name} 프로필 이미지`}
            />
            <S.DeleteButtonWrapper onClick={() => onDelete(member.name)}>
              <SystemDanger width="0.83331rem" />
            </S.DeleteButtonWrapper>
          </S.ProfileWrapper>
          <NumberInput
            defaultValue={member.amount}
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
