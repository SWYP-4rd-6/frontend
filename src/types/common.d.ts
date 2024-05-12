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
export interface reviewType {
  user: string;
  point: number;
  desc: string;
}
export interface guideProductType {
  id: number;
  title: string;
  description?: string;
  price?: number;
  longitude?: number;
  latitude?: number;
  guideStart: string;
  guideEnd: string;
  categories?: Array<string>;
  thumb?: string;
  images?: Array<string>;
  review?: Array<reviewType>;
}
