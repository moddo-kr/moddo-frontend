import { LoaderFunction, redirect } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { getGroupDetail } from '@/entities/group/api/group';
import { isAxiosError } from 'axios';
import { BoundaryError } from '@/shared/types/error.type';

// 지출 생성 페이지에서 필요한 데이터를 로드하는 가드 로더
// 1. URL 파라미터에서 groupToken을 추출
// 2. 토큰 유효성 검사 (모임 정보 불러오기)
// 3. 토큰과 모임 정보를 로더 데이터에 저장
const createExpensePageGuardLoader: LoaderFunction = async ({ params }) => {
  // url 파라미터에서 groupToken 추출
  const { groupToken } = params;

  // groupToken이 없으면 모임 선택 페이지로 리다이렉트
  if (!groupToken) {
    return redirect(ROUTE.groupSetup);
  }

  // 토큰 유효성 검사
  // 모임 데이터 불러오기
  try {
    const groupData = await getGroupDetail(groupToken);
    // 모임 정보가 없으면 리다이렉트
    if (!groupData) {
      throw new Error();
    }

    return { groupToken, groupData };
  } catch (error: unknown) {
    // 토큰이 유효하지 않은 경우에는 모임 선택 페이지로 이동
    if (isAxiosError(error)) {
      if (error.response?.status === 401 || error.response?.status === 404) {
        return redirect(ROUTE.groupSetup);
      }
    }
    // 그 외에는 에러를 그대로 던진다
    throw new BoundaryError({});
  }
};

export default createExpensePageGuardLoader;
