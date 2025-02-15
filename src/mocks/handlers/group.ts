import { http, HttpResponse, passthrough } from 'msw';

const groupHandlers = [
  http.post('/api/v1/group', ({ request }) => {
    const isMocked = request.headers.get('X-Mock-Request');
    if (!isMocked || isMocked !== 'true') return passthrough();

    const accessToken = request.headers.get('Authorization');
    if (!accessToken) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    /** body를 잘 전송했는지 확인용 */
    const body = request.json();
    console.log('response body:', body);

    return HttpResponse.json({
      groupToken: import.meta.env.VITE_MOCK_GROUP_TOKEN,
    });
  }),
];

export default groupHandlers;
