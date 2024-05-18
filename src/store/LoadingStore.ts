import { create } from 'zustand';

interface LoadingState {
  loading: boolean;
}

interface LoadingAction {
  setLoading: (value: LoadingState['loading']) => void;
}

const useLoadingStore = create<LoadingState & LoadingAction>((set) => ({
  loading: false,

  setLoading: (value) =>
    set((state) => ({
      loading: value,
    })),
}));

export default useLoadingStore;
