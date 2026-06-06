import { getAuth } from '@/entities/auth/api/auth';
import { getGroupDetail } from '@/entities/group/api/group';
import { getProfiles } from '@/entities/member/api/getProfiles';
import payment from '@/entities/payment/api/payment';
import { queryClient } from '@/shared/api/queryClient';
import { ROUTE } from '@/shared/config/route';
import { BoundaryError } from '@/shared/types/error.type';
import { isAxiosError } from 'axios';
import { LoaderFunctionArgs, redirect } from 'react-router';

async function editExpensesLoader({ params }: LoaderFunctionArgs) {
  const { groupToken } = params;

  if (!groupToken) return redirect(ROUTE.home);

  try {
    const auth = await queryClient.ensureQueryData({
      queryKey: ['auth', 'user'],
      queryFn: getAuth,
    });
    if (!auth?.authenticated) {
      const returnUrl = encodeURIComponent(
        `/expense-detail/${groupToken}/edit-expenses`
      );
      return redirect(`/login?returnUrl=${returnUrl}`);
    }

    const profiles = await queryClient.ensureQueryData({
      queryKey: ['profiles', groupToken],
      queryFn: () => getProfiles(groupToken),
    });
    const myProfile =
      profiles.find((profile) => profile.userId === auth.user?.id) ?? null;
    if (!myProfile) return redirect(`/join/${groupToken}`);

    if (myProfile.role !== 'MANAGER') {
      return redirect(`/expense-detail/${groupToken}`);
    }

    // 승인됐거나 승인대기 중인 입금 확인 요청이 있으면 수정 불가
    // 버튼 클릭 핸들러에서도 체크하지만 직접 URL 접근 / 뒤로가기 재진입을 막는 가드
    const [{ exists }, groupData] = await Promise.all([
      payment.exists(groupToken),
      getGroupDetail(groupToken),
    ]);
    if (exists) {
      return redirect(`/expense-detail/${groupToken}`);
    }

    return { groupToken, groupData };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new BoundaryError({
          title: '접근 권한이 없어요',
          description: '참여한 모임의 정산만 확인할 수 있어요.',
        });
      }
      if (error.response?.status === 404) {
        throw new BoundaryError({
          title: '모임을 찾을 수 없어요',
          description: '삭제되었거나 존재하지 않는 모임이에요.',
        });
      }
    }
    throw error;
  }
}

export default editExpensesLoader;
