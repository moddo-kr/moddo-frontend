import { ExpenseList } from '@/pages/createBill/types/expense.type';
import axiosInstance from './axios';

const expense = {
  // GET getAllExpense - 아직 API 스펙이 확정되지 않아서 임시 url입니다..
  getAll: (meetId: number): Promise<ExpenseList> =>
    axiosInstance
      .get(`/api/v1/expenses?meetId=${meetId}`, {
        useMock: true,
      })
      .then((res) => res.data),
};

export default expense;
