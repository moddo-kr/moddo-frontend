import {
  ExpenseForm,
  ExpenseList,
} from '@/pages/createBill/types/expense.type';
import axiosInstance from './axios';

const expense = {
  // GET getAllExpense
  getAll: (groupToken: string): Promise<ExpenseList> =>
    axiosInstance
      .get(`/api/v1/expenses?groupToken=${groupToken}`, {
        useMock: true,
      })
      .then((res) => res.data),
  // POST createExpenses
  create: ({
    groupToken,
    data,
  }: {
    groupToken: string;
    data: ExpenseForm;
  }): Promise<void> =>
    axiosInstance.post(`/api/v1/expenses?groupToken=${groupToken}`, data, {
      useMock: true,
    }),
  // DELETE deleteByExpenseId
  delete: ({
    groupToken,
    expenseId,
  }: {
    groupToken: string;
    expenseId: number;
  }): Promise<void> =>
    axiosInstance.delete(
      `/api/v1/expenses/${expenseId}?groupToken=${groupToken}`,
      {
        useMock: true,
      }
    ),
};

export default expense;
