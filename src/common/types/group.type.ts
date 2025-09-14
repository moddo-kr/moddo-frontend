import { Member } from './member.type';

export interface Group {
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
