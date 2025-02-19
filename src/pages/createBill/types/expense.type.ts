export interface ExpenseDetail {
  id: number;
  date: Date;
  content: string;
  totalAmount: number;
  groupMembers: string[];
}

export interface ExpenseDetailList {
  expenses: ExpenseDetail[];
}
