import {
  ExpenseForm,
  SingleExpenseForm,
  ExpenseList,
  ExpenseDetailList,
} from '@/entities/expense/model/expense.type';
import axiosInstance from '@/shared/api/axios';

const expense = {
  // GET getAllExpense
  getAll: (groupToken: string): Promise<ExpenseList> =>
    axiosInstance.get(`/groups/${groupToken}/expenses`).then((res) => res.data),
  // POST createExpenses
  create: ({
    groupToken,
    data,
  }: {
    groupToken: string;
    data: ExpenseForm;
  }): Promise<void> =>
    axiosInstance.post(`/groups/${groupToken}/expenses`, data),
  // DELETE deleteByExpenseId
  delete: ({
    groupToken,
    expenseId,
  }: {
    groupToken: string;
    expenseId: number;
  }): Promise<void> =>
    axiosInstance.delete(`/groups/${groupToken}/expenses/${expenseId}`),
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
    axiosInstance.put(`/groups/${groupToken}/expenses/${expenseId}`, data),
  // GET getExpenseDetailsByGroupId
  getDetail: (groupToken: string): Promise<ExpenseDetailList> =>
    axiosInstance
      .get(`/groups/${groupToken}/expenses/details`)
      .then((res) => res.data),
};

export default expense;
