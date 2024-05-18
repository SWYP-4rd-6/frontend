import { SymbolCodepoints } from 'react-material-symbols';
import { DateTime } from 'luxon';
import { CategoryKorType, CategoryType } from './types/common';

const getTagIcon = (tag: CategoryType): SymbolCodepoints => {
  switch (tag) {
    case 'DINING':
      return 'restaurant';
    case 'OUTDOOR':
      return 'nature';
    case 'TOUR':
      return 'tour';
    case 'ENTERTAINMENT':
      return 'sports_esports';
    case 'ART_CULTURE':
      return 'palette';
    case 'SPORTS_FITNESS':
      return 'hiking';
    default:
      return 'nature';
  }
};

const getTagNameKor = (tag: CategoryType): CategoryKorType | null => {
  switch (tag) {
    case 'ALL':
      return '전체';
    case 'DINING':
      return '먹거리';
    case 'OUTDOOR':
      return '야외 활동';
    case 'NEAR':
      return '근처';
    case 'BEST':
      return '추천';
    case 'TOUR':
      return '관광';
    case 'ENTERTAINMENT':
      return '놀거리';
    case 'ART_CULTURE':
      return '문화예술';
    case 'SPORTS_FITNESS':
      return '스포츠/운동';
    default:
      return null;
  }
};

const getTagName = (tag: CategoryKorType): CategoryType | null => {
  switch (tag) {
    case '전체':
      return 'ALL';
    case '먹거리':
      return 'DINING';
    case '야외 활동':
      return 'OUTDOOR';
    case '근처':
      return 'NEAR';
    case '추천':
      return 'BEST';
    case '관광':
      return 'TOUR';
    case '놀거리':
      return 'ENTERTAINMENT';
    case '문화예술':
      return 'ART_CULTURE';
    case '스포츠/운동':
      return 'SPORTS_FITNESS';
    default:
      return null;
  }
};

const formatDate = (dateString: string): string => {
  const date = DateTime.fromISO(dateString);
  return date.toFormat('yyyy.LL.dd'); // 2024.05.12
};

const formatDateKor = (dateString: string): string => {
  const date = DateTime.fromISO(dateString);
  return date.toFormat('yyyy년 LL월 dd일'); // 2024년 5월 17일
};

const formatTimeRange = (start: string, end: string): string => {
  const startTime = DateTime.fromISO(start);
  const endTime = DateTime.fromISO(end);
  const startTimeString = startTime.toFormat('HH:mm');
  const endTimeString = endTime.toFormat('HH:mm');

  //const duration = endTime.diff(startTime, 'hours').hours; (${duration}시간 소요)
  return `${startTimeString}~${endTimeString}`; //"17:00~19:00 (2시간 소요)
};

const calculateDays = (startDateStr: string, endDateStr: string) => {
  // 문자열을 Date 객체로 변환
  const startDate: any = new Date(startDateStr);
  const endDate: any = new Date(endDateStr);

  const timeDifference = endDate - startDate;
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

  return daysDifference;
};

export {
  getTagIcon,
  getTagName,
  getTagNameKor,
  formatDate,
  formatDateKor,
  formatTimeRange,
  calculateDays,
};
