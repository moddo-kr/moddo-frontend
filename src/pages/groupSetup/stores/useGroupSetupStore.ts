import { Member } from '@/common/types/member.type';
import { create } from 'zustand';

interface GroupSetupState {
  groupName: string;
  password: string;
  members: Member[];
  setGroupName: (groupName: string) => void;
  setPassword: (password: string) => void;
  setMembers: (members: {name: string}[]) => void;
}

export const useGroupSetupStore = create<GroupSetupState>((set) => ({
  groupName: '',
  password: '',
  members: [],
  setGroupName: (groupName) => set({ groupName: groupName }),
  setPassword: (password) => set({ password: password }),
  setMembers: (members) => set({ members: members }),
}));
