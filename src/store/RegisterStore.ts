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
    guideTime: number;
    requiredTime: string;
    thumb: string;
    thumb_local: string;
    images: string[];
    categories: Category[];
    price: number | undefined;
  };
};

type UserAction = {
  changeState: (field: keyof Omit<UserState['tour'], 'images' | 'categories'>, value: any) => void;
  addImage: (image: string) => void;
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
    guideTime: 0,
    requiredTime: '',
    thumb: '',
    thumb_local: '',
    images: [],
    categories: [],
    price: undefined,
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
