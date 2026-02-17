import { SingleExpenseForm } from '@/entities/expense/model/expense.type';

export type EditExpenseContext = {
  expenseId: number;
  initialExpense: SingleExpenseForm;
};

export type ExpenseStepContext = {
  isExpenseCreated: boolean;
  expenseId?: number;
  initialExpense?: SingleExpenseForm;
};

export type EditExpenseStepContext = {
  isExpenseCreated: boolean;
  expenseId: number;
  initialExpense: SingleExpenseForm;
};
