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
    `/group-members/${groupMemberId}/payment?groupToken=${groupToken}`,
    { isPaid }
  );
  return response.data;
};
