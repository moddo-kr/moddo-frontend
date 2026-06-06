import { useLoaderData } from 'react-router';
import { useGetMemberExpenseDetails } from '@/features/expense-management/api/useGetMemberExpenseDetails';
import { MemberProfile } from '@/entities/member/model/member.type';
import ExpenseMemberItem from '@/pages/expenseDetail/ui/ExpenseMemberItem';
import { StatusType } from '../ExpenseTimeHeader/index.type';
import * as S from './index.style';

interface ExpenseMembersProps {
  groupToken: string;
  settlementStatus: StatusType;
}

function ExpenseMembers({ groupToken, settlementStatus }: ExpenseMembersProps) {
  const { myProfile } = useLoaderData() as {
    myProfile: MemberProfile;
  };

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

  const isManager = myProfile.role === 'MANAGER';

  return (
    <S.Wrapper>
      {memberExpenseData.map((member) => (
        <ExpenseMemberItem
          key={member.id}
          member={member}
          groupToken={groupToken}
          settlementStatus={settlementStatus}
          isManager={isManager}
        />
      ))}
    </S.Wrapper>
  );
}

export default ExpenseMembers;
