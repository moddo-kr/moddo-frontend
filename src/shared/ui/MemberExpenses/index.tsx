import { SystemDanger } from '@/shared/assets/svgs/icon';
import NumberInput from '@/shared/ui/NumberInput';
import { ExpenseFormMember } from '@/domains/expense/model/expense.type';
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
            <S.ProfileWrapper>
              <S.ProfileImg
                src={member.profile}
                alt={`${member.name} 프로필 이미지`}
              />
              {members.length > 1 ? (
                <S.DeleteButtonWrapper onClick={() => onDelete(member.name)}>
                  <SystemDanger width="0.83331rem" />
                </S.DeleteButtonWrapper>
              ) : null}
            </S.ProfileWrapper>
            <S.NameText variant="caption">{member.name}</S.NameText>
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
