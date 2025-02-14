import { Fragment } from 'react/jsx-runtime';
import { format, parse } from 'date-fns';
import { Expense } from '@/pages/createBill/types/expense.type';
import ExpenseCard from '../ExpenseCard';
import * as S from './index.styles';

const dateFormat = 'yyyy년 M월 d일';

const categrizeExpensesByDate = (expenses: Expense[]) => {
  // 날짜별로 지출 내역을 분류
  const expenseMap = expenses.reduce(
    (acc, expense) => {
      const date = format(new Date(expense.date), dateFormat);
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(expense);
      return acc;
    },
    {} as Record<string, Expense[]>
  );

  // 날짜 오름차순으로 정렬하여 반환
  return Object.entries(expenseMap).sort(
    ([dateA, _expenseA], [dateB, _expenseB]) =>
      parse(dateA, dateFormat, new Date()).getTime() -
      parse(dateB, dateFormat, new Date()).getTime()
  );
};

interface ExpenseCardListProps {
  expenses: Expense[];
}

function ExpenseCardList({ expenses }: ExpenseCardListProps) {
  const categorizedExpenses = categrizeExpensesByDate(expenses);

  return (
    <S.ListContainer>
      {categorizedExpenses.map(([date, expensesArray]) => (
        <Fragment key={date}>
          <S.Date>{date}</S.Date>
          {expensesArray.map((expense, index) => (
            <ExpenseCard key={expense.id} index={index} {...expense} />
          ))}
        </Fragment>
      ))}
    </S.ListContainer>
  );
}

export default ExpenseCardList;
