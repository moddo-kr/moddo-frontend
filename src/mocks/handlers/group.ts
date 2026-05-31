import { http, HttpResponse, passthrough } from 'msw';
import getIsMocked from '@/mocks/lib/getIsMocked';
import { AccountVariable, Group } from '@/entities/group/model/group.type';

const dummyGroups: Group[] = [
  {
    id: 1,
    groupName: '강남역 모각코',
    members: [
      {
        id: 1,
        name: '김모또',
        role: 'MANAGER',
        profile: '',
        userId: 1,
        isPaid: false,
        paidAt: null,
        paymentRequestId: null,
      },
      {
        id: 2,
        name: '박완숙',
        role: 'PARTICIPANT',
        profile: '',
        userId: 2,
        isPaid: false,
        paidAt: null,
        paymentRequestId: 1,
      },
      {
        id: 3,
        name: '정에그',
        role: 'PARTICIPANT',
        profile: '',
        userId: 3,
        isPaid: false,
        paidAt: null,
        paymentRequestId: null,
      },
    ],
  },
  {
    id: 2,
    groupName: '서교동 모각코',
    members: [
      {
        id: 1,
        role: 'MANAGER',
        name: '김모또',
        profile: '',
        userId: 1,
        isPaid: false,
        paidAt: null,
        paymentRequestId: null,
      },
      {
        id: 4,
        role: 'PARTICIPANT',
        name: '안맥북',
        profile: '',
        userId: 4,
        isPaid: false,
        paidAt: null,
        paymentRequestId: null,
      },
      {
        id: 5,
        role: 'PARTICIPANT',
        name: '박삼성',
        profile: '',
        userId: 5,
        isPaid: false,
        paidAt: null,
        paymentRequestId: null,
      },
    ],
  },
];

const dummyMemberList = [
  {
    id: 1,
    role: 'MANAGER',
    name: '김모또',
    profile: '',
    userId: null as number | null,
    isPaid: false,
    paidAt: null,
  },
  {
    id: 2,
    role: 'PARTICIPANT',
    name: '박완숙',
    profile: '',
    userId: null as number | null,
    isPaid: false,
    paidAt: null,
  },
  {
    id: 3,
    role: 'PARTICIPANT',
    name: '정에그',
    profile: '',
    userId: 3,
    isPaid: false,
    paidAt: null,
  },
];

const groupHandlers = [
  // GET GetGroupHeader (path 방식)
  // 모임 상단 조회
  http.get('/api/v1/groups/:groupToken/header', ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    return HttpResponse.json({
      ...dummyGroups[0],
    });
  }),

  // GET GetGroupOne
  // TODO: /api/v1/groups/:groupToken/header 로 대체 예정, 삭제 필요
  http.get(`/api/v1/group`, ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    const url = new URL(request.url);
    const groupToken = url.searchParams.get('groupToken');

    if (!groupToken) {
      return HttpResponse.json(
        { error: 'groupToken is required' },
        { status: 401 }
      );
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
        return HttpResponse.json(
          { error: 'groupToken is required' },
          { status: 401 }
        );
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
        bank,
        accountNumber,
      });
    }
  ),

  // GET /api/v1/groups/:settlementCode/members
  http.get('/api/v1/groups/:settlementCode/members', ({ request, params }) => {
    if (!getIsMocked(request)) return passthrough();

    const { settlementCode } = params;

    if (!settlementCode) {
      return HttpResponse.json(
        { error: 'settlementCode is required' },
        { status: 400 }
      );
    }

    return HttpResponse.json({ members: dummyMemberList });
  }),

  http.post<{ settlementCode: string }, { memberId: number }>(
    '/api/v1/groups/:settlementCode/members/assign',
    async ({ request, params }) => {
      if (!getIsMocked(request)) return passthrough();

      const { settlementCode } = params;
      const { memberId } = await request.json();

      console.log(`settlementCode: ${settlementCode}, memberId: ${memberId}`);

      // mock user id: 1 (auth.ts 참고)
      const target = dummyMemberList.find((m) => m.id === memberId);
      if (target) target.userId = 1;

      return HttpResponse.json({ success: true }, { status: 200 });
    }
  ),
];

export default groupHandlers;
