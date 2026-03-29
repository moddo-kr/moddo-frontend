export interface PaymentRequest {
  requestedAt: string;
  paymentRequestId: number;
  memberId: number;
  name: string;
  profileUrl: string;
  totalAmount: number;
}

export interface PaymentList {
  paymentRequests: PaymentRequest[];
}
