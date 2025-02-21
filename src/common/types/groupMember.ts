export interface UpdatePaymentStatusVariable {
  groupToken: string;
  groupMemberId: number;
  isPaid: boolean;
}

export interface UpdatePaymentStatusData {
  id: number;
  name: string;
  isPaid: boolean;
  role: string;
  profile: string;
  paidAt: string;
}