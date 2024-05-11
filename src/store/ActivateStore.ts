import { create } from 'zustand';

type State = {
  readyToNext: boolean;
};

type Action = {
  toggleActivateButton: (readyToNext: State['readyToNext']) => void;
};

export const useActivateStore = create<State & Action>((set) => ({
  readyToNext: false,
  toggleActivateButton: (readyToNext) =>
    set((_) => ({
      readyToNext,
    })),
}));
