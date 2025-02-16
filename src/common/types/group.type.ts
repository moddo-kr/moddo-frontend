import { Member } from './member.type';

export interface Group {
  groupName: string;
  members: Member[];
}

export interface CreateGroupData {
  name: string;
  password: string;
}
