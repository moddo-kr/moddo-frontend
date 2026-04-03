import axiosInstance from '@/shared/api/axios';
import { MemberProfile, MemberProfileData } from '../model/member.type';

// TODO : 기존 groupToken들을 사용하는 방식을 settlementCode를 사용하는 방식으로 변경해야 함.
// 모임원 조회 API - 정산 참여자 프로필 조회
export const getProfiles = async (
  settlementCode: string
): Promise<MemberProfile[]> => {
  const response = await axiosInstance.get<MemberProfileData>(
    `/groups/${settlementCode}/members`,
    { useMock: true }
  );
  return response.data.members;
};
