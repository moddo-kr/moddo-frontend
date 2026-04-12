import axiosInstance from '@/shared/api/axios';
import { PaymentList } from '@/entities/payment/model/payment.type';

const payment = {
  getAll: (): Promise<PaymentList> =>
    // TODO: 모의 데이터 제거 후 실제 API 연동 시 삭제 useMock: true 옵션 제거
    // axiosInstance.get('/payments', { useMock: true }).then((res) => res.data),
    axiosInstance.get('/payments').then((res) => res.data),
};

export default payment;
