import { useGetMemberExpenseDetailsSuspense } from '@/features/expense-management/api/useGetMemberExpenseDetailsSuspense';
import ExpenseMemberItem from '@/pages/billDetail/ui/ExpenseMemberItem';
import * as S from './index.style';

interface ExpenseMembersProps {
  groupToken: string;
  status: string;
}

function ExpenseMembers({ groupToken, status }: ExpenseMembersProps) {
  const { data: memberExpenseData } =
    useGetMemberExpenseDetailsSuspense(groupToken);

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
