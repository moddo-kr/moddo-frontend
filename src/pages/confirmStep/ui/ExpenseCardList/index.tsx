import { Fragment } from 'react/jsx-runtime';
import { Expense } from '@/domains/expense/model/expense.type';
import { EditBillContext } from '@/shared/types/createBillFunnel.type';
import Text from '@/shared/ui/Text';
import categrizeExpensesByDateWithIndex from './lib/categrizeExpensesByDateWithIndex';
import ExpenseCard from '../ExpenseCard';
import * as S from './index.styles';

interface ExpenseCardListProps {
  expenses: Expense[];
  onEdit: (context: EditBillContext) => void;
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
