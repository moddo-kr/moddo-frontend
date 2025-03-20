import { Fragment } from 'react/jsx-runtime';
import {
  Expense,
  SingleExpenseForm,
} from '@/pages/createBill/types/expense.type';
import Text from '@/common/components/Text';
import categrizeExpensesByDateWithIndex from '../../utils/categrizeExpensesByDateWithIndex';
import ExpenseCard from '../ExpenseCard';
import * as S from './index.styles';

interface ExpenseCardListProps {
  expenses: Expense[];
  onEdit: (context: {
    expenseId: number;
    initialExpense: SingleExpenseForm;
  }) => void;
}

function ExpenseCardList({ expenses, onEdit }: ExpenseCardListProps) {
  const categorizedExpenses = categrizeExpensesByDateWithIndex(expenses);

  return (
    <S.ListContainer>
      {categorizedExpenses.map(([date, expensesArray]) => (
        <Fragment key={date}>
          <Text variant="body1Sb">{date}</Text>
          {expensesArray.map((expense) => (
            <ExpenseCard
              key={expense.id}
              index={expense.globalIndex}
              onEdit={onEdit}
              {...expense}
            />
          ))}
        </Fragment>
      ))}
    </S.ListContainer>
  );
}

export default ExpenseCardList;
