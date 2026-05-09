import { Fragment } from 'react/jsx-runtime';
import { Expense } from '@/entities/expense/model/expense.type';
import Text from '@/shared/ui/Text';
import { EditExpenseContext } from '@/features/expense-management/lib/createExpenseFunnel.type';
import useDeleteMutation from '@/features/expense-management/api/useDeleteExpense';
import { SettlementSummary } from '../SettlementSummary';
import categrizeExpensesByDateWithIndex from './lib/categrizeExpensesByDateWithIndex';
import * as S from './index.styles';

interface ExpenseCardListProps {
  groupToken: string;
  expenses: Expense[];
  onEdit: (context: EditExpenseContext) => void;
}

function ExpenseCardList({
  groupToken,
  expenses,
  onEdit,
}: ExpenseCardListProps) {
  const { mutate: deleteExpense } = useDeleteMutation(groupToken);
  const categorizedExpenses = categrizeExpensesByDateWithIndex(expenses);

  return (
    <S.ListContainer>
      {categorizedExpenses.map(([date, expensesArray]) => (
        <Fragment key={date}>
          <Text variant="body1Sb">{date}</Text>
          {expensesArray.map((expense) => (
            <SettlementSummary
              key={expense.id}
              index={expense.globalIndex}
              onEdit={onEdit}
              onDelete={
                expense.globalIndex !== 0
                  ? () => deleteExpense({ groupToken, expenseId: expense.id })
                  : undefined
              }
              {...expense}
            />
          ))}
        </Fragment>
      ))}
    </S.ListContainer>
  );
}

export default ExpenseCardList;
