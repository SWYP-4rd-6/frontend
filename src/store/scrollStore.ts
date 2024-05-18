import { create } from 'zustand';

// State와 Action을 따로 나눠서 타입 정의!
interface ScrollState {
  scrolling: boolean;
}

interface ScrollAction {
  setScrolling: (value: ScrollState['scrolling']) => void;
}

const useScrollStore = create<ScrollState & ScrollAction>((set) => ({
  scrolling: false, //초기값

  //상태 엄데이트 로직
  setScrolling: (value) =>
    set((state) => ({
      //state 는 이전 상태
      scrolling: value,
    })),
}));

export default useScrollStore;
