import { MemberExpense } from '@/common/types/memberExpense';
import axiosInstance from './axios';

export const getMemberExpenseDetails = async (
  groupToken: string
): Promise<MemberExpense[]> => {
  const response = await axiosInstance.get(
    `/member-expenses?groupToken=${groupToken}`
  );
  return response.data.memberExpenses;
};
