// 정산 참여 페이지 전 거치는 로더
// TODO : 기존 groupToken들을 사용하는 방식을 settlementCode를 사용하는 방식으로 변경해야 함.

import { getUserInfo } from '@/entities/auth/api/auth';
import { getProfiles } from '@/entities/member/api/getProfiles';
import { queryClient } from '@/shared/api/queryClient';
import { ROUTE } from '@/shared/config/route';
import { LoaderFunctionArgs, redirect } from 'react-router';

async function joinLoader({ params }: LoaderFunctionArgs) {
  // TODO: groupToken → settlementCode 마이그레이션 시 파라미터 이름 변경 필요
  const { groupToken } = params;

  if (!groupToken) return redirect(ROUTE.home);

  // 1. 로그인 여부 확인
  const user = await queryClient.ensureQueryData({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });

  if (!user) {
    const returnUrl = encodeURIComponent(`/join/${groupToken}`);
    return redirect(`/login?returnUrl=${returnUrl}`);
  }

  // 2. 표시할 프로필 목록 조회
  const profiles = await queryClient.ensureQueryData({
    queryKey: ['profiles', groupToken],
    queryFn: () => getProfiles(groupToken),
  });

  // 3. 본인 프로필을 선택했는지 확인
  const myProfile =
    profiles.find((profile) => profile.userId === user.id) ?? null;
  if (myProfile) return redirect(`/expense-detail/${groupToken}`);

  return { profiles };
}

export default joinLoader;
