import {
  ExpenseForm,
  ExpenseList,
} from '@/pages/createBill/types/expense.type';
import axiosInstance from './axios';

const expense = {
  // GET getAllExpense - 아직 API 스펙이 확정되지 않아서 임시 url입니다..
  getAll: (_groupToken: string): Promise<ExpenseList> =>
    axiosInstance
      .get(`/api/v1/expenses`, {
        useMock: true,
      })
      .then((res) => res.data),
  // POST createExpenses
  // TODO : grouptoken 사용 방법 적용 필요함
  create: ({
    data,
  }: {
    groupToken: string;
    data: ExpenseForm;
  }): Promise<void> =>
    axiosInstance.post(`/api/v1/expenses`, data, {
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
