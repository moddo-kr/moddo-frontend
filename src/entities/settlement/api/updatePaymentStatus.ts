import {
  UpdatePaymentStatusData,
  UpdatePaymentStatusVariable,
} from '@/entities/member/model/groupMember.type';
import axiosInstance from '@/shared/api/axios';

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
