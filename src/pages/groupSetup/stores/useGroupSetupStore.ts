import { Member } from '@/common/types/member.type';
import { create } from 'zustand';

interface GroupSetupState {
  groupName: string;
  password: string;
  members: Member[];
  setGroupName: (groupName: string) => void;
  setPassword: (password: string) => void;
  setMembers: (members: Member[]) => void;
}

export const useGroupSetupStore = create<GroupSetupState>((set) => ({
  groupName: '',
  password: '',
  members: [],
  setGroupName: (groupName) => set({ groupName }),
  setPassword: (password) => set({ password }),
  setMembers: (members) => set({ members }),
}));
