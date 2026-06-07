import axiosInstance from '@/shared/api/axios';
import {
  PaymentActionResult,
  PaymentList,
} from '@/entities/payment/model/payment.type';

const payment = {
  getAll: (): Promise<PaymentList> =>
    axiosInstance.get('/payments').then((res) => res.data),

  approve: (paymentRequestId: number): Promise<PaymentActionResult> =>
    axiosInstance
      .patch(`/payments/${paymentRequestId}/approve`)
      .then((res) => res.data),

  reject: (paymentRequestId: number): Promise<PaymentActionResult> =>
    axiosInstance
      .patch(`/payments/${paymentRequestId}/reject`)
      .then((res) => res.data),

  create: (code: string): Promise<PaymentActionResult> =>
    axiosInstance.post(`/groups/${code}/payments`).then((res) => res.data),

  exists: (groupCode: string): Promise<{ exists: boolean }> =>
    axiosInstance
      .get(`/groups/${groupCode}/payments/exists`)
      .then((res) => res.data),
};

export default payment;
