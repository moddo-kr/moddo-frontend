import { LoaderFunction, redirect } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import { getGroupHeader } from '@/service/apis/group';

const groupTokenUrlLoader: LoaderFunction = async ({ params }) => {
  const { groupToken } = params;

  // URL에 그룹 토큰이 없으면 리다이렉트
  if (!groupToken) return redirect(ROUTE.home);

  // 정산 내역 헤더 조회 API 호출 - 토큰 유효성 확인 및 데이터 조회
  // 관리자 권한은 없어도 된다.
  const data = await getGroupHeader(groupToken);

  // 조회한 데이터가 없으면 리다이렉트
  if (!data) return redirect(ROUTE.home);

  // 토큰과 데이터를 반환
  return { groupToken, groupData: data };
};

export default groupTokenUrlLoader;
