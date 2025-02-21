import { SystemDanger } from '@/assets/svgs/icon';
import NumberInput from '@/common/components/NumberInput';
import Text from '@/common/components/Text';
import { ExpenseFormMember } from '@/pages/createBill/types/expense.type';
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
            <Text variant="caption">{member.name}</Text>
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
