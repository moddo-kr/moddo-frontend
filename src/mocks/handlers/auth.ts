import { User } from '@/entities/auth/model/user.type';
import { http, HttpResponse, passthrough } from 'msw';

const authHandlers = [
  http.get('/api/v1/user/guest/token', ({ request }) => {
    const isMocked = request.headers.get('X-Mock-Request');
    if (!isMocked || isMocked !== 'true') return passthrough();
    return HttpResponse.json({
      accessToken: import.meta.env.VITE_MOCK_ACCESS_TOKEN,
      refreshToken: import.meta.env.VITE_MOCK_REFRESH_TOKEN,
      expiredAt: '2025-03-06 14:17:26',
      isMember: false,
    });
  }),
  http.get('/api/v1/user/auth/check', ({ request }) => {
    const isMocked = request.headers.get('X-Mock-Request');
    if (!isMocked || isMocked !== 'true') return passthrough();

    console.log('유저 인증 체크 API 호출 - Mocked Response');

    return HttpResponse.json({
      authenticated: true,
      user: { id: 'mock-test-user-id' },
    });
  }),

  http.get('/api/v1/user/info', ({ request }) => {
    const isMocked = request.headers.get('X-Mock-Request');
    if (!isMocked || isMocked !== 'true') return passthrough();

    const mockUserInfo: User = {
      id: 1,
      name: '김모또',
      email: 'moddo@kakao.com',
    };
    return HttpResponse.json(mockUserInfo);
  }),

  http.post('/api/v1/user/logout', ({ request }) => {
    const isMocked = request.headers.get('X-Mock-Request');
    if (!isMocked || isMocked !== 'true') return passthrough();

    return new HttpResponse(null, { status: 204 });
  }),

  // 회원 탈퇴 API
  http.delete('/api/v1/users/me', ({ request }) => {
    const isMocked = request.headers.get('X-Mock-Request');
    if (!isMocked || isMocked !== 'true') return passthrough();

    return new HttpResponse(null, { status: 204 });
  }),
];

export default authHandlers;
