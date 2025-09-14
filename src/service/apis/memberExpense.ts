import { MemberExpense } from '@/shared/types/memberExpense.type';
import axiosInstance from './axios';

export const getMemberExpenseDetails = async (
  groupToken: string
): Promise<MemberExpense[]> => {
  const response = await axiosInstance.get(
    `/member-expenses?groupToken=${groupToken}`
  );
  return response.data.memberExpenses;
};
