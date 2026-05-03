import { Member } from '@/entities/member/model/member.type';

export interface Group {
  id: number;
  groupName: string;
  members: Member[];
}

export interface GroupTokenUrlLoaderData {
  groupToken: string;
  groupData: Group;
}

export interface CreateGroupData {
  name: string;
  password: string;
}

export interface AccountVariable {
  bank: string;
  accountNumber: string;
}

export interface GroupHeaderResponse {
  groupName: string;
  totalAmount: number;
  deadline: Date;
  bank: string;
  accountNumber: string;
}

export type SettlementStatus = 'ALL' | 'IN_PROGRESS' | 'COMPLETED';
export type SettlementSort = 'LATEST' | 'OLDEST';

export interface SettlementGroup {
  groupId: number;
  groupCode: string;
  name: string;
  totalAmount: number;
  totalMemberCount: number;
  completedMemberCount: number;
  createdAt: string;
  completedAt: string | null;
}
