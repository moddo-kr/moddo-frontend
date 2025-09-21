import axiosInstance from '@/shared/api/axios';
import { MemberExpense } from '@/entities/expense/lib/memberExpense.type';

export const getMemberExpenseDetails = async (
  groupToken: string
): Promise<MemberExpense[]> => {
  const response = await axiosInstance.get(
    `/member-expenses?groupToken=${groupToken}`
  );
  return response.data.memberExpenses;
};
