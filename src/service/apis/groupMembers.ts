import { Member, MemberData } from '@/common/types/member.type';
import axiosInstance from './axios';

export interface CreateGroupMembersVariable {
  name: string;
}

const groupMembers = {
  // NOTE : 사용하지 않는 API인지 확인 필요합니다.
  // /** body에 {name: string}[] 을 전달해야 하며, 총무는 제외한다. */
  // post: async (groupMemberData: CreateGroupMembersVariable[]) => {
  //   const groupToken = localStorage.getItem('groupToken');
  //   const response = await axiosInstance.post(
  //     `/group-members?groupToken=${groupToken}`,
  //     { members: groupMemberData },
  //     {
  //       useMock: true,
  //     }
  //   );
  //   return response.data.members;
  // },
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
