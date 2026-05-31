export interface MemberSettlement {
  id: number;
  role: string;
  name: string;
  totalAmount: number;
  isPaid: boolean;
  paidAt: Date | null;
  profile: string;
  // TEMP: member-expenses API에 paymentRequestId 추가되면 optional 제거
  paymentRequestId?: number | null;
  expenses: {
    content: string;
    amount: number;
  }[];
}
