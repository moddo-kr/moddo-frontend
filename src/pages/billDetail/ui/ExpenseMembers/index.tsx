import { useGetMemberExpenseDetails } from '@/entities/expense/api/useGetMemberExpenseDetails';
import ExpenseMemberItem from '@/pages/billDetail/ui/ExpenseMemberItem';
import * as S from './index.style';

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
