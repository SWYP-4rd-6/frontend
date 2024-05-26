import { create } from 'zustand';

interface User {
  id: number;
  email: string;
  name: string;
  birthdate: string;
  gender: 'Male' | 'Female' | null;
  nationality: string;
}

interface AuthState {
  user: User;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  setUserId: (userId: number) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: {
    id: 0,
    email: '',
    name: '',
    birthdate: '',
    gender: null,
    nationality: '',
  },
  isLogin: JSON.parse(localStorage.getItem('isLogin') || 'false'),
  setIsLogin: (isLogin: boolean) => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
    set({ isLogin });
  },
  setUserId: (userId: number) => {
    set((state) => ({
      user: {
        ...state.user,
        id: userId,
      }
    }));
  },
}));

export default useAuthStore;
