import axiosInstance from './axios';

export interface CreateGroupMembersVariable {
  name: string;
}

const groupMembers = {
  /** body에 {name: string}[] 을 전달해야 하며, 총무는 제외한다. */
  post: async (groupMemberData: CreateGroupMembersVariable[]) => {
    const groupToken = localStorage.getItem('groupToken');
    const response = await axiosInstance.post(
      `/group-members?groupToken=${groupToken}`,
      { members: groupMemberData },
      {
        useMock: true,
      }
    );
    return response.data.members;
  },
};

export default groupMembers;
