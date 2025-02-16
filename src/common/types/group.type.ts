import { Member2 } from './member.type';

export interface Group {
  groupName: string;
  members: Member2[];
}

export interface CreateGroupData {
  name: string;
  password: string;
}