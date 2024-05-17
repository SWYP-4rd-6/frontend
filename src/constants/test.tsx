export const imgs = [
  '/trip_package_sample.png',
  '/trip_image_sample1.png',
  '/trip_image_sample2.png',
  '/trip_package_sample.png',
];

export const guideProduct = {
  id: 1,
  title: '신나는 더미 서울 투어',
  description: '서울 *** 여행 가이드 합니다.',
  price: 10000,
  longitude: 37,
  latitude: 127,
  guideStart: '2024-05-12T15:59:35.598Z',
  guideEnd: '2024-05-12T15:59:35.598Z',
  categories: ['DINING', 'OUTDOOR', 'TOUR', 'ENTERTAINMENT', 'ART_CULTURE', 'SPORTS_FITNESS'],
  thumb: '/trip_package_sample.png',
  images: ['/trip_package_sample.png', '/trip_package_sample.png', '/trip_package_sample.png'],
  guideTime: 3,
  nickname: 'nickname01',
  review: [
    {
      reviewId: 1,
      reviewer: 'nickname01',
      guideProductId: 1,
      content: '더미 후기가 너무 좋아서 기대 되네요! 다음번에도 참여하고 싶어요.',
      rating: 3,
      createdAt: '2024-05-05 00:00:00',
      profileImageUrl: '/man_sample.png',
      reviewImages: [
        '/trip_package_sample.png',
        '/trip_image_sample1.png',
        '/trip_image_sample2.png',
      ],
    },
    {
      reviewId: 1,
      reviewer: 'nickname01',
      guideProductId: 1,
      content:
        '정말 좋은 여행입니다.정말 좋은 여행입니다.정말 좋은 여행입니다.정말 좋은 여행입니다.정말 좋은 여행입니다.',
      rating: 5,
      createdAt: '2024-05-05 00:00:00',
      profile: '안녕하세요!',
      profileImageUrl: '/man_sample.png',
      reviewImages: ['/trip_package_sample.png', '/trip_image_sample1.png'],
    },
  ],
};

export const RESERVATION_DATA = {
  guide: {
    email: 'user01@test.com',
    nickname: 'nickname01',
    name: 'name01',
    profile: '안녕하세요!',
    profileImageUrl: '/trip_package_sample.png',
    reviewCount: 10,
    reviewRating: 4.6,
    createdAt: '2024-05-05 00:00:00',
    guideProducts: [
      {
        id: 1,
        title: '상품 이름',
        description: '설명',
        thumb: '/trip_package_sample.png',
        guideStart: '2024-05-17T13:13:31.658Z',
        guideEnd: '2024-05-17T13:13:31.658Z',
      },
    ],
  },
  product: {
    userId: 1,
    nickname: 'nickname01',
    id: 1,
    title: '신나는 서울 투어',
    description: '서울 *** 여행 가이드 합니다.',
    price: 10000,
    locationName: '한강 공원',
    latitude: 37,
    longitude: 127,
    guideStart: '2024-05-17T13:13:31.658Z',
    guideEnd: '2024-05-17T13:13:31.658Z',
    guideTime: 3,
    categories: ['DINING', 'OUTDOOR'],
    thumb: '/trip_package_sample.png',
    images: ['/trip_package_sample.png', '/trip_package_sample.png'],
    reviews: [
      {
        reviewId: 1,
        reviewer: 'nickname01',
        content: '정말 좋은 여행입니다.',
        rating: 5,
        createdAt: '2024-05-05 00:00:00',
        reviewImages: '이미지 url',
      },
    ],
  },
  guideStart: '2024-04-29T12:30:45Z',
  guideEnd: '2024-04-30T12:30:45Z',
  personnel: 1,
  message: '안녕하세요',
  price: 10000,
  paymentStatus: 'COMPLETE',
  reservationStatus: 'RESERVED',
  merchantUid: '20240429-ad5eea',
};

export const user = {
  email: 'user01@test.com',
  nickname: 'nickname01',
  name: 'name01',
  profile: '안녕하세요!',
  profileImageUrl: '/man_sample.png',
  guideProducts: [
    {
      id: 1,
      title: '더미 상품 이름',
      description: '설명',
      thumb: '/trip_image_sample1.png',
      guideStart: '2024-05-15T01:21:04.331Z',
      guideEnd: '2024-05-15T01:21:04.331Z',
    },
    {
      id: 2,
      title: '상품 이름',
      description: '설명',
      thumb: '/trip_image_sample1.png',
      guideStart: '2024-05-15T01:21:04.331Z',
      guideEnd: '2024-05-15T01:21:04.331Z',
    },
    {
      id: 3,
      title: '한강 치맥파티',
      description: '설명',
      thumb: '/trip_image_sample1.png',
      guideStart: '2024-05-15T01:21:04.331Z',
      guideEnd: '2024-05-15T01:21:04.331Z',
    },
  ],
};
