import axiosInstance from '@/shared/api/axios';
import {
  UpdatePaymentStatusData,
  UpdatePaymentStatusVariable,
} from '@/entities/settlement/model/groupMember.type';

export const updatePaymentStatus = async ({
  groupToken,
  groupMemberId,
  isPaid,
}: UpdatePaymentStatusVariable): Promise<UpdatePaymentStatusData> => {
  const response = await axiosInstance.put(
    `/groups/${groupToken}/members/${groupMemberId}/payment`,
    { isPaid }
  );
  return response.data;
};
