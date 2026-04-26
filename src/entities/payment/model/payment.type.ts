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

export type PaymentStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

export interface PaymentActionResult {
  id: number;
  settlementId: number;
  requestMemberId: number;
  targetUserId: number;
  requestedAt: string;
  processedAt: string | null;
  status: PaymentStatus;
}
