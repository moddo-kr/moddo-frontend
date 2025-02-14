import { http, HttpResponse, passthrough } from 'msw';
import getIsMocked from '@/mocks/utils/getIsMocked';

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
];

export default groupHandlers;
