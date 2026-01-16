import { useLoaderData } from 'react-router';
import getTotalExpense from '@/entities/expense/lib/getTotalExpense';
import { EditBillContext } from '@/features/expense-management/lib/createBillFunnel.type';
import useGetAllExpenseSuspense from '@/features/expense-management/api/useGetAllExpenseSuspense';
import Text from '@/shared/ui/Text';
import ExpenseCardList from '../ExpenseCardList';
import * as S from './index.styles';

interface ExpenseContentProps {
  onEdit: ({ expenseId, initialExpense }: EditBillContext) => void;
}

function ExpenseContent({ onEdit }: ExpenseContentProps) {
  const { groupToken } = useLoaderData();
  const { data } = useGetAllExpenseSuspense(groupToken);

  return (
    <>
      <S.TotalExpenseWrapper>
        <Text variant="body1Sb">누적 금액</Text>
        <Text variant="heading2" color="semantic.text.strong">
          {getTotalExpense(data.expenses).toLocaleString()}원
        </Text>
      </S.TotalExpenseWrapper>
      <ExpenseCardList expenses={data.expenses} onEdit={onEdit} />
    </>
  );
}

export default ExpenseContent;
