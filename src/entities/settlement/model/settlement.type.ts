export interface MemberSettlement {
  id: number;
  role: string;
  name: string;
  totalAmount: number;
  isPaid: boolean;
  paidAt: Date | null;
  profile: string;
  paymentRequestId: number | null;
  paymentRequestStatus: 'PENDING' | 'APPROVED' | 'REJECTED' | null;
  paymentRequestStatusLabel: '확인중' | '승인완료' | '거절' | null;
  expenses: {
    content: string;
    amount: number;
  }[];
}
