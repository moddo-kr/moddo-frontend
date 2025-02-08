import { create } from 'zustand';
import { ExpenseList, ExpenseMember } from '../types/expense.type';

interface CreateBillState {
  memberExpenses: ExpenseMember[];
  expenses: ExpenseList;
  setMemberExpenses: (memberExpenses: ExpenseMember[]) => void;
  setExpenses: (expenses: ExpenseList) => void;
}

export const useCreateBillStore = create<CreateBillState>((set) => ({
  memberExpenses: [],
  expenses: {
    expenses: [],
  },
  setMemberExpenses: (memberExpenses) => set({ memberExpenses }),
  setExpenses: (expenses) => set({ expenses }),
}));
