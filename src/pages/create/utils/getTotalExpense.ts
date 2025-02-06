import { Expense } from '@/pages/create/types/expense.type';

const getTotalExpense = (expenses: Expense[]) => {
  return expenses.reduce((acc, cur) => acc + cur.amount, 0);
};

export default getTotalExpense;
