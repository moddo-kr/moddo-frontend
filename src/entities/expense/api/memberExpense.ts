import axiosInstance from '@/shared/api/axios';
import { MemberSettlement } from '@/entities/settlement/model/settlement.type';

export const getMemberExpenseDetails = async (
  groupToken: string
): Promise<MemberSettlement[]> => {
  const response = await axiosInstance.get(
    `/groups/${groupToken}/member-expenses`
  );
  return response.data.memberExpenses;
};
