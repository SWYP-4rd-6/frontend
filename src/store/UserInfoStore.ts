import { create } from 'zustand';

export type UserState = {
  user: {
    email: string;
    nickname: string;
    name: string;
    phone?: string;
    nationality?: string;
    gender: 'Male' | 'Female' | null;
    password: string;
    passwordCheck: string;
    birthdate: string;
    location?: string;
  };
};

type UserAction = {
  changeState: (key: keyof UserState['user'], value: string) => void;
};

export const useUserInfoStore = create<UserState & UserAction>((set) => ({
  user: {
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
  },
  changeState: (key, value) => set((state) => ({ user: { ...state.user, [key]: value } })),
}));
