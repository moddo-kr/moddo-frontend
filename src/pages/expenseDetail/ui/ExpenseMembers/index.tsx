import { useLoaderData } from 'react-router';
import { useGetMemberExpenseDetails } from '@/features/expense-management/api/useGetMemberExpenseDetails';
import { MemberProfile } from '@/entities/member/model/member.type';
import ExpenseMemberItem from '@/pages/expenseDetail/ui/ExpenseMemberItem';
import * as S from './index.style';

interface ExpenseMembersProps {
  groupToken: string;
  status: string;
}

function ExpenseMembers({ groupToken, status }: ExpenseMembersProps) {
  const { myProfile, paymentRequestIdMap } = useLoaderData() as {
    myProfile: MemberProfile;
    // TEMP: member-expenses에 paymentRequestId 추가되면 paymentRequestIdMap 제거
    paymentRequestIdMap: Map<number, number | null>;
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
          // TEMP: member-expenses에 paymentRequestId 추가되면 병합 제거
          member={{
            ...member,
            paymentRequestId: paymentRequestIdMap.get(member.id),
          }}
          groupToken={groupToken}
          status={status}
          isManager={isManager}
        />
      ))}
    </S.Wrapper>
  );
}

export default ExpenseMembers;
