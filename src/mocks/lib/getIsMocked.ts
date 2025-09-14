import { DefaultBodyType, StrictRequest } from 'msw';

/**
 * 모킹 여부 확인 (X-Mock-Request 헤더가 없거나 false이면 실제 서버로 요청
 * @see https://mswjs.io/docs/api/passthrough
 */
const getIsMocked = (request: StrictRequest<DefaultBodyType>) => {
  const isMocked = request.headers.get('X-Mock-Request');
  return isMocked && isMocked === 'true';
};

export default getIsMocked;
