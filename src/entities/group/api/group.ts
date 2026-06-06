import axiosInstance from '@/shared/api/axios';
import {
  AccountVariable,
  CreateGroupData,
  Group,
  GroupHeaderResponse,
  GroupListItem,
  SettlementGroup,
  SettlementSort,
  SettlementStatus,
} from '@/entities/group/model/group.type';

export const getGroupDetail = async (groupToken: string): Promise<Group> => {
  const response = await axiosInstance.get(`/groups/${groupToken}`);
  return response.data;
};

export const createGroup = async (groupData: CreateGroupData) => {
  const response = await axiosInstance.post<{ groupToken: string }>(
    '/groups',
    groupData
  );
  return response.data;
};

export const putGroupAccount = async ({
  accountData,
  groupToken,
}: {
  accountData: AccountVariable;
  groupToken: string;
}) => {
  const response = await axiosInstance.put(
    `/groups/${groupToken}/account`,
    accountData
  );
  return response.data;
};

// NOTE : 기존에 groupToken을 전달하는 방식에서 settlementCode를 전달하는 방식으로 변경함
export const getGroupHeader = (
  settlementCode: string
): Promise<GroupHeaderResponse> => {
  return axiosInstance
    .get(`/groups/${settlementCode}/header`)
    .then((res) => res.data);
};

export const completeGroupSettlement = async (
  settlementCode: string
): Promise<void> => {
  await axiosInstance.patch(`/groups/${settlementCode}/complete`);
};

export const getSettlementList = (
  status: SettlementStatus,
  sort: SettlementSort,
  limit = 100
): Promise<SettlementGroup[]> => {
  return axiosInstance
    .get('/groups', { params: { status, sort, limit } })
    .then((res) => res.data);
};

export const getGroupList = (): Promise<GroupListItem[]> => {
  return axiosInstance.get('/groups/list').then((res) => res.data);
};
