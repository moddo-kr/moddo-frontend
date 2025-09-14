import { SingleExpenseForm, Expense } from '@/shared/types/expense.type';

/**
 * 모든 지출의 누적 합을 반환합니다.
 * @param expenses 지출 목록
 * @returns 지출의 총 합
 */
const getTotalExpense = (expenses: (Expense | SingleExpenseForm)[]) => {
  return expenses.reduce((acc, cur) => acc + cur.amount, 0);
};

export default getTotalExpense;
