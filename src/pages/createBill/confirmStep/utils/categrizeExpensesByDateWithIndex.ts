import { format, parse } from 'date-fns';
import { Expense } from '@/pages/createBill/types/expense.type';

const dateFormat = 'yyyy년 M월 d일';

/**
 * 날짜별로 지출 내역을 분류하고, 날짜 오름차순으로 정렬하는 함수
 * 날짜별로 묶인 지출 내역의 전체 인덱스도 계산
 */
const categrizeExpensesByDateWithIndex = (expenses: Expense[]) => {
  // 1. 날짜별로 지출 내역을 분류
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

  // 2. 날짜 오름차순으로 정렬하여 반환
  const sortedExpenses = Object.entries(expenseMap).sort(
    ([dateA, _expenseA], [dateB, _expenseB]) =>
      parse(dateA, dateFormat, new Date()).getTime() -
      parse(dateB, dateFormat, new Date()).getTime()
  );

  // 3. 날짜별로 묶인 지출 내역의 전체 인덱스 계산
  let globalIndex = 0;
  return sortedExpenses.map(([date, expensesList]) => {
    const updatedExpenses = expensesList.map((expense) => {
      const newExpense = { ...expense, globalIndex };
      globalIndex += 1;
      return newExpense;
    });
    return [date, updatedExpenses] as [
      string,
      (Expense & { globalIndex: number })[],
    ];
  });
};

export default categrizeExpensesByDateWithIndex;
