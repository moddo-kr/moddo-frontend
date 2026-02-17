import {
  ExpenseForm,
  SingleExpenseForm,
  ExpenseList,
  ExpenseDetailList,
  ExpenseLinkList,
} from '@/entities/expense/model/expense.type';
import axiosInstance from '@/shared/api/axios';

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

  // GET links (링크 관리 페이지에서 조회되는 데이터)
  // NOTE : API 명세서에 없는 데이터이므로 요청 url 변경 가능성 있음
  getLinks: (): Promise<ExpenseLinkList> =>
    axiosInstance
      .get(`/expenses/links`, { useMock: true })
      .then((res) => res.data),
};

export default expense;
