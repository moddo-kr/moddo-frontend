import { LoaderFunction, redirect } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import { getGroupHeader } from '@/service/apis/group';
import { isAxiosError } from 'axios';
import { BoundaryError } from '../types/error.type';

const groupTokenUrlLoader: LoaderFunction = async ({ params }) => {
  const { groupToken } = params;

  // URL에 그룹 토큰이 없으면 리다이렉트
  if (!groupToken) return redirect(ROUTE.home);

  try {
    // 정산 내역 헤더 조회 API 호출 - 토큰 유효성 확인 및 데이터 조회
    // 관리자 권한은 없어도 된다.
    const data = await getGroupHeader(groupToken);
    // 토큰과 데이터를 반환
    return { groupToken, groupData: data };
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      // CHECK - 문서에는 401 에러로 되어있지만 실제로는 500 에러가 발생함
      if (error.response?.status === 500) {
        throw new BoundaryError({
          title: '접근 권한이 없어요',
          description: '참여한 모임의 정산만 확인할 수 있어요.',
        });
      }
    }
    // 그 외에는 그대로 전달
    throw error;
  }
};

export default groupTokenUrlLoader;
