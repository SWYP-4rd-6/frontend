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
  guideProducts: Array<guideProductType>;
}

export interface GuideType extends UserType {
  reviewCount: number;
  reviewRating: number;
  createdAt: string;
  guideProducts: Array<guideProductType>;
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
// export interface hostGuideProductType {
//   id: number;
//   title: string;
//   description: string;
//   guideStart: string;
//   guideEnd: string;
//   thumb: string;
// }

export interface GuideProductType {
  id: number;
  title: string;
  nickname?: string;
  description: string;
  price?: number;
  guideTime?: number;
  longitude?: number;
  latitude?: number;
  guideStart: string;
  guideEnd: string;
  categories?: Array<string>;
  thumb?: string;
  images?: Array<string>;
  //review?: Array<reviewType>;
  userId?: number; //
  locationName?: string; //
  categories?: Array<string>; //
  reviews?: Array<reviewType>; //
}

export interface ReservationType {
  guide: GuideType;
  product: guideProductType;
  guideStart: string;
  guideEnd: string;
  personnel: number;
  message: string;
  price: number;
  paymentStatus: string;
  reservationStatus: string;
  merchantUid: string;
}
