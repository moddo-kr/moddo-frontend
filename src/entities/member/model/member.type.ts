export const memberRole = ['MANAGER', 'PARTICIPANT'] as const;

export type MemberRole = (typeof memberRole)[number];

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
