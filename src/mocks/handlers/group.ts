import { http, HttpResponse, passthrough } from 'msw';
import getIsMocked from '@/mocks/utils/getIsMocked';

const dummyGroups = [
  {
    id: 1,
    name: '강남역 모각코',
    members: [
      { id: 1, name: '김모또', role: 'MANAGER' },
      { id: 2, name: '박완숙', role: 'PARTICIPANT' },
      { id: 3, name: '정에그', role: 'PARTICIPANT' },
    ],
  },
];

const groupHandlers = [
  // GET 단건 그룹 조회 (아직 DTO 미정)
  http.get(`/api/v1/group`, ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    return HttpResponse.json({
      ...dummyGroups[0],
    });
  }),
];

export default groupHandlers;
