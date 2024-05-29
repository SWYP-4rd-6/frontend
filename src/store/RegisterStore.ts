import { create } from 'zustand';

export type Category =
  | 'DINING'
  | 'TOUR'
  | 'OUTDOOR'
  | 'ENTERTAINMENT'
  | 'ART_CULTURE'
  | 'SPORTS_FITNESS';

export type UserState = {
  tour: {
    name: string;
    des: string;
    latitude: number;
    longitude: number;
    place: string;
    date: string;
    guideStart: string;
    guideEnd: string;
    guideStartTime: string;
    guideEndTime: string;
    guideTime: number;
    thumb: File | null;
    thumb_local: string;
    images: File[]; 
    categories: Category[];
    price: number | undefined;
    postId: number | null;
  };
};

type UserAction = {
  changeState: (field: keyof Omit<UserState['tour'], 'categories'>, value: any) => void;
  addImage: (image: File) => void;
  setCategories: (categories: Category[]) => void;
};

export const useTourRegStore = create<UserState & UserAction>((set) => ({
  tour: {
    name: '',
    des: '',
    latitude: 0,
    longitude: 0,
    place: '',
    date: '',
    guideStart: '',
    guideEnd: '',
    guideStartTime: '',
    guideEndTime: '',
    guideTime: 0,
    thumb: null,
    thumb_local: '',
    images: [],
    categories: [],
    price: undefined,
    postId: null,
  },
  changeState: (field, value) =>
    set((state) => ({
      ...state,
      tour: {
        ...state.tour,
        [field]: value,
      },
    })),
  addImage: (image) =>
    set((state) => ({
      ...state,
      tour: {
        ...state.tour,
        images: [...state.tour.images, image],
      },
    })),
  setCategories: (categories) =>
    set((state) => ({
      ...state,
      tour: {
        ...state.tour,
        categories: categories,
      },
    })),
}));
