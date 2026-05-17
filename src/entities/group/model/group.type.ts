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
}

export interface AccountVariable {
  bank: string;
  accountNumber: string;
}

export interface GroupHeaderResponse {
  groupName: string;
  totalAmount: number;
  deadline: string;
  bank: string;
  accountNumber: string;
  totalMemberCount: number;
  completedMemberCount: number;
}

export interface GroupListItem {
  settlementId: number;
  name: string;
  groupCode: string;
  createdAt: string;
  completedAt: string | null;
  members: Member[];
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
