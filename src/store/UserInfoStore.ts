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
  googleUser: {
    nickname: string;
    name: string;
    phone?: string;
    nationality: string;
    location?: string;
    birthdate: string;
    gender: 'Male' | 'Female' | null;
    uuid: string;
  };
};

type UserAction = {
  changeState: (key: keyof UserState['user'], value: string) => void;
  changeGState: (key: keyof UserState['googleUser'], value: string) => void;
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
  googleUser: {
    nickname: '',
    name: '',
    phone: '',
    nationality: '',
    location: '',
    birthdate: '',
    gender: null,
    uuid: '',
  },
  changeState: (key, value) => set((state) => ({ user: { ...state.user, [key]: value } })),
  changeGState: (key, value) =>
    set((state) => ({ googleUser: { ...state.googleUser, [key]: value } })),
}));
