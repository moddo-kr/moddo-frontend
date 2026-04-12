import axiosInstance from '@/shared/api/axios';
import { parseDate } from '@/shared/lib/parseDate';
import { MemberProfile, MemberProfileRaw } from '../model/member.type';

// 참여자 선택 api (로그인한 참여자가 정산에 참여하도록 프로필 설정)
export const assignMember = async (
  settlementCode: string,
  memberId: number
): Promise<MemberProfile> => {
  const response = await axiosInstance.post<MemberProfileRaw>(
    `/groups/${settlementCode}/members/assign`,
    { memberId }
  );
  return {
    ...response.data,
    paidAt: parseDate(response.data.paidAt),
  };
};
