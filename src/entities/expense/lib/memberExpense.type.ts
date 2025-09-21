export interface MemberExpense {
  id: number;
  role: string;
  name: string;
  totalAmount: number;
  isPaid: boolean;
  paidAt: Date | null;
  profile: string;
  expenses: {
    content: string;
    amount: number;
  }[];
}

export interface MemberExpenseData {
  memberExpenseData: MemberExpense[];
}
