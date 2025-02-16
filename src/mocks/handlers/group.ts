import { http, HttpResponse, passthrough } from 'msw';
import getIsMocked from '@/mocks/utils/getIsMocked';
import { AccountVariable } from '@/service/apis/group';

const dummyGroups = [
  {
    id: 1,
    groupName: '강남역 모각코',
    members: [
      { id: 1, name: '김모또', role: 'MANAGER' },
      { id: 2, name: '박완숙', role: 'PARTICIPANT' },
      { id: 3, name: '정에그', role: 'PARTICIPANT' },
    ],
  },
];

const groupHandlers = [
  // GET GetGroupOne
  http.get(`/api/v1/group`, ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    const url = new URL(request.url);
    const groupToken = url.searchParams.get('groupToken');

    if (!groupToken) {
      return HttpResponse.json({
        error: 'groupToken is required',
        status: 401,
      });
    }

    return HttpResponse.json({
      ...dummyGroups[0],
    });
  }),

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

  http.put<object, AccountVariable>(
    '/api/v1/group/account',
    async ({ request }) => {
      if (!getIsMocked(request)) return passthrough();

      const url = new URL(request.url);
      const groupToken = url.searchParams.get('groupToken');

      if (!groupToken) {
        return HttpResponse.json({
          error: 'groupToken is required',
          status: 401,
        });
      }

      const body = await request.json();
      const { bank, accountNumber } = body;
      return HttpResponse.json({
        id: 1,
        writer: 1,
        createAt: new Date().toISOString(),
        expiredAt: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toISOString(),
        bank: bank,
        accountNumber: accountNumber,
      });
    }
  ),
];

export default groupHandlers;
