import axiosInstance from '@/shared/api/axios';
import { Member, MemberData } from '@/entities/member/model/member.type';

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

export default groupMembers;
