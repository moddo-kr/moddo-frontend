export type MemberRole = 'MANAGER' | 'PARTICIPANT';

export interface Member {
  id: number;
  role: MemberRole;
  name: string;
  profile: string;
  isPaid: boolean;
  paidAt: Date | null;
}

export interface MemberData {
  name: string;
  role: MemberRole;
}
