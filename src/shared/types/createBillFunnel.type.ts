import { SingleExpenseForm } from '@/shared/types/expense.type';

export type EditBillContext = {
  expenseId: number;
  initialExpense: SingleExpenseForm;
};

export type BillStepContext = {
  isExpenseCreated: boolean;
  expenseId?: number;
  initialExpense?: SingleExpenseForm;
};

export type EditBillStepContext = {
  isExpenseCreated: boolean;
  expenseId: number;
  initialExpense: SingleExpenseForm;
};
