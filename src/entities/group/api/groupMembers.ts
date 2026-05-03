import axiosInstance from '@/shared/api/axios';
import { Member } from '@/entities/member/model/member.type';

export interface CreateGroupMembersVariable {
  name: string;
}

const groupMembers = {
  // POST addGroupMember
  post: async ({
    groupMemberData,
    groupToken,
  }: {
    groupMemberData: CreateGroupMembersVariable;
    groupToken: string;
  }) => {
    const response = await axiosInstance.post<Member>(
      `/groups/${groupToken}/members`,
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
      `/groups/${groupToken}/members/${groupMemberId}`
    );
    return response.data;
  },
};

export default groupMembers;
