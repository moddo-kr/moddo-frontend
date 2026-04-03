// 정산 상세 페이지 전 거치는 로더
// TODO : 기존 groupToken들을 사용하는 방식을 settlementCode를 사용하는 방식으로 변경했음. 동작 확인 필요함.

import { getUserInfo } from '@/entities/auth/api/auth';
import { getGroupHeader } from '@/entities/group/api/group';
import { getProfiles } from '@/entities/member/api/getProfiles';
import { queryClient } from '@/shared/api/queryClient';
import { ROUTE } from '@/shared/config/route';
import { BoundaryError } from '@/shared/types/error.type';
import { isAxiosError } from 'axios';
import { LoaderFunctionArgs, redirect } from 'react-router';

async function expenseDetailLoader({ params }: LoaderFunctionArgs) {
  // TODO: groupToken → settlementCode 마이그레이션 시 파라미터 이름 변경 필요
  const { groupToken } = params;

  if (!groupToken) return redirect(ROUTE.home);

  try {
    // 1. 로그인 여부 확인
    const user = await queryClient.ensureQueryData({
      queryKey: ['userInfo'],
      queryFn: getUserInfo,
    });
    if (!user)
      return redirect(`/login?returnUrl=/expense-detail/${groupToken}`);

    // 2. 프로필 선택 여부 확인
    const profiles = await queryClient.ensureQueryData({
      queryKey: ['profiles', groupToken],
      queryFn: () => getProfiles(groupToken),
    });
    const myProfile = profiles.find((profile) => profile.userId === user.id) ?? null;
    if (!myProfile) return redirect(`/join/${groupToken}`);

    const groupData = await queryClient.ensureQueryData({
      queryKey: ['groupHeader', groupToken],
      queryFn: () => getGroupHeader(groupToken),
    });

    return { groupToken, groupData, myProfile };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      // CHECK - 문서에는 401 에러로 되어있지만 실제로는 500 에러가 발생함
      if (error.response?.status === 401) {
        throw new BoundaryError({
          title: '접근 권한이 없어요',
          description: '참여한 모임의 정산만 확인할 수 있어요.',
        });
      }
    }

    // 그 외에는 그대로 전달
    throw error;
  }
}

export default expenseDetailLoader;
