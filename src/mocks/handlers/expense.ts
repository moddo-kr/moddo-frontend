import { http, HttpResponse, passthrough } from 'msw';

const expenseHandlers = [
  // GET getAllExpense
  http.get('/api/v1/expenses', ({ request }) => {
    // 모킹 여부 확인 (X-Mock-Request 헤더가 없거나 false이면 실제 서버로 요청)
    // https://mswjs.io/docs/api/passthrough
    const isMocked = request.headers.get('X-Mock-Request');
    if (!isMocked || isMocked !== 'true') return passthrough();

    const url = new URL(request.url);
    const meedId = url.searchParams.get('meetId');

    if (!meedId) return new HttpResponse(null, { status: 404 });

    return HttpResponse.json({
      expenses: [
        {
          amount: 100000,
          content: '하이디라오',
          date: '2025-02-03',
          memberExpenses: [
            {
              memberId: 1,
              name: '김반숙',
              amount: 50000,
            },
            {
              memberId: 2,
              name: '박완숙',
              amount: 50000,
            },
          ],
        },
        {
          amount: 20000,
          content: '카페',
          date: '2025-02-03',
          memberExpenses: [
            {
              memberId: 1,
              name: '김반숙',
              amount: 10000,
            },
            {
              memberId: 3,
              name: '정에그',
              amount: 10000,
            },
          ],
        },
      ],
    });
  }),
];

export default expenseHandlers;
