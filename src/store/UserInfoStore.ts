import { create } from 'zustand';

export type UserState = {
  email: string;
  nickname: string;
  name: string;
  phone: string;
  nationality?: string;
  gender: 'Male' | 'Female' | null;
  password: string;
  passwordCheck: string;
  birthdate: string;
  location?: string;
};

type UserAction = {
  saveState: (userInfo: Partial<UserState>) => void;
  resetState: () => void;
};

export const useUserInfoStore = create<UserState & UserAction>((set) => ({
  email: '',
  nickname: '',
  name: '',
  phone: '',
  nationality: '',
  gender: null,
  password: '',
  passwordCheck: '',
  birthdate: '',
  location: '',

  saveState: (userInfo) => set((state) => ({ ...state, ...userInfo })),
  resetState: () =>
    set({
      email: '',
      nickname: '',
      name: '',
      phone: '',
      nationality: '',
      gender: null,
      password: '',
      passwordCheck: '',
      birthdate: '',
      location: '',
    }),
}));
