import { SingleExpenseForm } from '@/domains/expense/model/expense.type';

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
