import { create } from 'zustand';

interface GroupSetupState {
  groupName: string;
  password: string;
  setGroupName: (groupName: string) => void;
  setPassword: (password: string) => void;
}

export const useGroupSetupStore = create<GroupSetupState>((set) => ({
  groupName: '',
  password: '',
  setGroupName: (groupName) => set({ groupName: groupName }),
  setPassword: (password) => set({ password: password }),
}));
