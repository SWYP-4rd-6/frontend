import { create } from 'zustand';

type State = {
  email: string;
  password: string;
  nickname: string;
  username: string;
  birth: string;
  gender: string;
  country: string;
  location: string;
};

type Action = {
  saveState: (userInfo: Partial<State>) => void;
};

export const useUserInfoStore = create<State & Action>((set) => ({
  email: '',
  password: '',
  nickname: '',
  username: '',
  birth: '',
  gender: '',
  country: '',
  location: '',

  saveState: (userInfo) => set((state) => ({ ...state, ...userInfo })),
}));
