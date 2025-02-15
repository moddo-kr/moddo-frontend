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
];

export default authHandlers;
