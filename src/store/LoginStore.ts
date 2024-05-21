import { create } from 'zustand';

interface AuthState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLogin: JSON.parse(localStorage.getItem('isLogin') || 'false'),
  setIsLogin: (isLogin: boolean) => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
    set({ isLogin });
  },
}));

export default useAuthStore;
