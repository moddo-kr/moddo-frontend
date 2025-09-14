import {
  ExpenseForm,
  SingleExpenseForm,
  ExpenseList,
  ExpenseDetailList,
} from '@/shared/types/expense.type';
import axiosInstance from './axios';

const expense = {
  // GET getAllExpense
  getAll: (groupToken: string): Promise<ExpenseList> =>
    axiosInstance
      .get(`/expenses?groupToken=${groupToken}`)
      .then((res) => res.data),
  // POST createExpenses
  create: ({
    groupToken,
    data,
  }: {
    groupToken: string;
    data: ExpenseForm;
  }): Promise<void> =>
    axiosInstance.post(`/expenses?groupToken=${groupToken}`, data),
  // DELETE deleteByExpenseId
  delete: ({
    groupToken,
    expenseId,
  }: {
    groupToken: string;
    expenseId: number;
  }): Promise<void> =>
    axiosInstance.delete(`/expenses/${expenseId}?groupToken=${groupToken}`),
  // PUT updateExpense
  update: ({
    groupToken,
    expenseId,
    data,
  }: {
    groupToken: string;
    expenseId: number;
    data: SingleExpenseForm;
  }): Promise<void> =>
    axiosInstance.put(`/expenses/${expenseId}?groupToken=${groupToken}`, data),
  // GET getExpenseDetailsByGroupId
  getDetail: (groupToken: string): Promise<ExpenseDetailList> =>
    axiosInstance
      .get(`expenses/details?groupToken=${groupToken}`)
      .then((res) => res.data),
};

export default expense;
