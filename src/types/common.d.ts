export type CategoryKorType =
  | '전체'
  | '근처'
  | '추천'
  | '먹거리'
  | '관광'
  | '야외 활동'
  | '놀거리'
  | '문화예술'
  | '스포츠/운동';

export type CategoryType =
  | 'ALL'
  | 'NEAR'
  | 'BEST'
  | 'DINING'
  | 'TOUR'
  | 'OUTDOOR'
  | 'ENTERTAINMENT'
  | 'ART_CULTURE'
  | 'SPORTS_FITNESS';

export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface SlickSettingsType {
  className?: string;
  centerMode?: boolean;
  arrows: boolean;
  centerPadding?: string;
  rows?: number;
  slidesPerRow?: number;
  dots?: boolean;
  initialSlide?: number;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll?: number;
  touchThreshold?: number;
  beforeChange: () => void;
  afterChange: (currentSlide: number) => void;
  variableWidth?: boolean;
  prevArrow?: any;
  nextArrow?: any;
}

export interface UserType {
  email: string;
  nickname: string;
  name: string;
  profile: string;
  profileImageUrl: string;
}

export interface GuideType extends UserType {
  reviewCount?: number;
  reviewRating?: number;
  createdAt?: string;
  guideProducts?: Array<guideProductType>;
  reviews?: ReviewType;
  languages: Array<string>;
}
export interface ReviewType {
  reviewId: number;
  reviewer: string;
  guideProductId: number;
  content: string;
  rating: number;
  createdAt: string;
  profileImageUrl: string;
  reviewImages: Array<string>;
}

export interface GuideProductType {
  id: number;
  title: string;
  nickname?: string;
  description?: string;
  price?: number;
  guideTime?: number;
  longitude?: number;
  latitude?: number;
  guideStart: string;
  guideEnd: string;
  guideStartTime?: string;
  guideEndTime?: string;
  categories?: Array<CategoryType>;
  thumb?: string;
  images?: Array<string>;
  userId?: number;
  locationName?: string;
  reviews?: Array<reviewType>;
}

export interface SortType {
  direction: string;
  nullHandling: string;
  ascending: true;
  property: string;
  ignoreCase: boolean;
  descending?: boolean;
}

export interface pageableType {
  offset: number;
  sort: Array<SortType>;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface MainContentType {
  bestGuideProducts: Array<GuideProductType>;
  nearGuideProducts: Array<GuideProductType>;
  allGuideProducts: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: Array<GuideProductType>;
    number: number;
    sort: Array<SortType>;
    numberOfElements: number;
    pageable: pageableType;
    first: boolean;
    last: boolean;
    empty: boolean;
  };
}

export interface SearchContentType {
  content: Array<guideProductType>;
  pageable: pageableType;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Array<SortType>;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface ReservationType {
  productId?: number;
  guide?: GuideType;
  product?: guideProductType;
  guideStart?: string;
  guideEnd?: string;
  guideStartTime?: string;
  guideEndTime?: string;
  personnel?: number;
  message?: string;
  price?: number;
  paymentStatus?: string;
  reservationStatus?: string;
  merchantUid?: string;
}

export interface mainContentType {
  location: string;
  title?: string;
}
