import { create } from 'zustand';

interface AuthState {
  userId: number | null;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  setUserId: (userId: number) => void;
}

const useLoginStore = create<AuthState>((set) => ({
  userId: localStorage.getItem('userId') !== null ? parseInt(localStorage.getItem('userId')!, 10) : null,
  isLogin: JSON.parse(localStorage.getItem('isLogin') || 'false'),
  setIsLogin: (isLogin: boolean) => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
    set({ isLogin });
  },
  setUserId: (userId: number) => {
    localStorage.setItem('userId', userId.toString());
    set({ userId });
  },
}));

export default useLoginStore;
