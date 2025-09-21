import axiosInstance from '@/shared/api/axios';
import { MemberSettlement } from '@/entities/settlement/model/settlement.type';

export const getMemberExpenseDetails = async (
  groupToken: string
): Promise<MemberSettlement[]> => {
  const response = await axiosInstance.get(
    `/member-expenses?groupToken=${groupToken}`
  );
  return response.data.memberExpenses;
};
