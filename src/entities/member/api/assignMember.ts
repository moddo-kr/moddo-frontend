import axiosInstance from '@/shared/api/axios';

// 참여자 선택 api (로그인한 참여자가 정산에 참여하도록 프로필 설정)
export const assignMember = async (
  settlementCode: string,
  memberId: number
): Promise<void> => {
  await axiosInstance.post(
    `/groups/${settlementCode}/members/assign`,
    {
      memberId,
    },
    { useMock: true }
  );
};
