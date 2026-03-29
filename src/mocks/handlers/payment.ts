import { http, HttpResponse, passthrough } from 'msw';
import getIsMocked from '@/mocks/lib/getIsMocked';
import moddoFace from '@/shared/assets/pngs/moddoFace.png';

const dummyPaymentRequests = [
  {
    requestedAt: '2026-03-29T22:00:00',
    paymentRequestId: 1,
    memberId: 2,
    name: '김반숙',
    profileUrl: moddoFace,
    totalAmount: 12000,
  },
  {
    requestedAt: '2026-03-29T22:00:00',
    paymentRequestId: 2,
    memberId: 3,
    name: '박완숙',
    profileUrl: moddoFace,
    totalAmount: 15000,
  },
  {
    requestedAt: '2026-03-29T22:00:00',
    paymentRequestId: 3,
    memberId: 4,
    name: '정에그',
    profileUrl: moddoFace,
    totalAmount: 18000,
  },
  {
    requestedAt: '2026-03-28T22:00:00',
    paymentRequestId: 4,
    memberId: 5,
    name: '안맥북',
    profileUrl: moddoFace,
    totalAmount: 21000,
  },
  {
    requestedAt: '2026-03-27T22:00:00',
    paymentRequestId: 5,
    memberId: 6,
    name: '박삼성',
    profileUrl: moddoFace,
    totalAmount: 24000,
  },
];

const paymentHandlers = [
  // GET payments
  http.get('/api/v1/payments', ({ request }) => {
    if (!getIsMocked(request)) return passthrough();

    return HttpResponse.json({
      paymentRequests: dummyPaymentRequests,
    });
  }),
];

export default paymentHandlers;
