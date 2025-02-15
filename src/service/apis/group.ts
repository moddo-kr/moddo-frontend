import axiosInstance from './axios';

export interface CreateGroupData {
  name: string;
  password: string;
}

export const postCreateGroup = async (groupData: CreateGroupData) => {
  const response = await axiosInstance.post('/group', groupData, {
    useMock: true,
  });
  console.log(response);
  return response.data;
};
