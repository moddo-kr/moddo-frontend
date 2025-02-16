import {
  ExpenseForm,
  ExpenseList,
  SingleExpenseForm,
} from '@/pages/createBill/types/expense.type';
import axiosInstance from './axios';

const expense = {
  // GET getAllExpense
  getAll: (groupToken: string): Promise<ExpenseList> =>
    axiosInstance
      .get(`/expenses?groupToken=${groupToken}`, {
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
    axiosInstance.post(`/expenses?groupToken=${groupToken}`, data, {
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
      `/expenses/${expenseId}?groupToken=${groupToken}`,
      {
        useMock: true,
      }
    ),
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
    axiosInstance.put(
      `/api/v1/expenses/${expenseId}?groupToken=${groupToken}`,
      data,
      {
        useMock: true,
      }
    ),
};

export default expense;
