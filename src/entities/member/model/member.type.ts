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

// 정산 참여자의 프로필 선택 시 필요한 정보
export interface MemberProfile {
  id: number;
  role: MemberRole;
  name: string;
  profile: string;
  userId: number | null; // userId는 로그인한 사용자의 ID와 매칭되어야 함
  isPaid: boolean;
  paidAt: Date | null;
}

export interface MemberProfileData {
  members: MemberProfile[];
}
