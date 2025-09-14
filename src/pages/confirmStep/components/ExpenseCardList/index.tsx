import { Fragment } from 'react/jsx-runtime';
import { Expense } from '@/pages/createBill/types/expense.type';
import { EditBillContext } from '@/pages/createBill/types/funnel.type';
import Text from '@/common/components/Text';
import categrizeExpensesByDateWithIndex from '../../utils/categrizeExpensesByDateWithIndex';
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
