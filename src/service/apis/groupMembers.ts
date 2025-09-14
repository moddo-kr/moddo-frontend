import { Member, MemberData } from '@/common/types/member.type';
import {
  UpdatePaymentStatusData,
  UpdatePaymentStatusVariable,
} from '@/common/types/groupMember';
import axiosInstance from './axios';

export interface CreateGroupMembersVariable {
  name: string;
}

const groupMembers = {
  // PUT addGroupMember
  put: async ({
    groupMemberData,
    groupToken,
  }: {
    groupMemberData: MemberData;
    groupToken: string;
  }) => {
    const response = await axiosInstance.put<Member>(
      `/group-members?groupToken=${groupToken}`,
      groupMemberData
    );
    return response.data;
  },
  // DELETE deleteGroupMember
  delete: async ({
    groupToken,
    groupMemberId,
  }: {
    groupToken: string;
    groupMemberId: number;
  }) => {
    const response = await axiosInstance.delete(
      `/group-members/${groupMemberId}?groupToken=${groupToken}`
    );
    return response.data;
  },
};

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

export default groupMembers;
