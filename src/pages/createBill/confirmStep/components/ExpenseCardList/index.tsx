import { Fragment } from 'react/jsx-runtime';
import { Expense } from '@/pages/createBill/types/expense.type2';
import { BillContextRequired } from '@/pages/createBill/types/billContext.type';
import categrizeExpensesByDateWithIndex from '../../utils/categrizeExpensesByDateWithIndex';
import ExpenseCard from '../ExpenseCard';
import * as S from './index.styles';

interface ExpenseCardListProps {
  expenses: Expense[];
  moveToEditStep: (context: BillContextRequired) => void;
}

function ExpenseCardList({ expenses, moveToEditStep }: ExpenseCardListProps) {
  const categorizedExpenses = categrizeExpensesByDateWithIndex(expenses);

  return (
    <S.ListContainer>
      {categorizedExpenses.map(([date, expensesArray]) => (
        <Fragment key={date}>
          <S.Date>{date}</S.Date>
          {expensesArray.map((expense) => (
            <ExpenseCard
              key={expense.id}
              index={expense.globalIndex}
              moveToEditStep={moveToEditStep}
              {...expense}
            />
          ))}
        </Fragment>
      ))}
    </S.ListContainer>
  );
}

export default ExpenseCardList;
