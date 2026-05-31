export interface MemberSettlement {
  id: number;
  role: string;
  name: string;
  totalAmount: number;
  isPaid: boolean;
  paidAt: Date | null;
  profile: string;
  paymentRequestId: number | null;
  expenses: {
    content: string;
    amount: number;
  }[];
}
