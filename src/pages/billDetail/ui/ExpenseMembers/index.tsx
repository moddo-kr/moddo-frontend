import { useGetMemberExpenseDetails } from '@/shared/api/memberExpense/useGetMemberExpenseDetails';
import * as S from './index.style';
import ExpenseMemberItem from '../ExpenseMemberItem';

interface ExpenseMembersProps {
  groupToken: string;
  status: string;
}

function ExpenseMembers({ groupToken, status }: ExpenseMembersProps) {
  const {
    data: memberExpenseData,
    isLoading,
    isError,
  } = useGetMemberExpenseDetails(groupToken);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError || !memberExpenseData) {
    return <div>error...</div>;
  }

  return (
    <S.Wrapper>
      {memberExpenseData.map((member) => (
        <ExpenseMemberItem
          key={member.id}
          member={member}
          groupToken={groupToken}
          status={status}
        />
      ))}
    </S.Wrapper>
  );
}

export default ExpenseMembers;
