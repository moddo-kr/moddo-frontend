import { useLoaderData } from 'react-router';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import {
  ActionArea,
  DescriptionField,
  Header,
} from '@/shared/design-system/ui';
import { getToken } from '@/shared/design-system';
import { PageLayout } from '@/shared/ui/PageLayout';
import getTotalExpense from '@/entities/expense/lib/getTotalExpense';
import { EditExpenseContext } from '@/features/expense-management/lib/createExpenseFunnel.type';
import useGetAllExpense from '../../features/expense-management/api/useGetAllExpense';
import ExpenseCardList from './ui/ExpenseCardList';
import * as S from './ConfirmStepPage.styles';

interface ConfirmStepProps {
  onNext: () => void;
  onBack: () => void;
  onEdit: ({ expenseId, initialExpense }: EditExpenseContext) => void;
  onAdd: () => void;
}

function ConfirmStepPage({ onNext, onBack, onEdit, onAdd }: ConfirmStepProps) {
  const { groupToken } = useLoaderData();
  const { data, isLoading } = useGetAllExpense(groupToken);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || !data.expenses) {
    return <div>지출 내역이 없습니다.</div>;
  }

  return (
    <PageLayout $bg="neutral">
      <Header
        type="default"
        headingIcon={
          <ArrowLeft width="1.5rem" color={getToken('fg.alternative')} />
        }
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={onBack}
        trailingIcon={<S.HeaderTrailingLabel>지출 추가</S.HeaderTrailingLabel>}
        onTrailingIconClick={onAdd}
      />
      <DescriptionField title={`지출 내역을\n확인해주세요.`} />
      <S.TotalExpenseWrapper>
        <S.TotalExpenseLabel>누적 금액</S.TotalExpenseLabel>
        <S.TotalExpenseAmount>
          {getTotalExpense(data.expenses).toLocaleString()}원
        </S.TotalExpenseAmount>
      </S.TotalExpenseWrapper>
      <ExpenseCardList
        groupToken={groupToken}
        expenses={data.expenses}
        onEdit={onEdit}
      />
      <ActionArea mainAction={{ label: '확인했어요', onClick: onNext }} />
    </PageLayout>
  );
}

export default ConfirmStepPage;
