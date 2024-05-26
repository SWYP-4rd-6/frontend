import { SymbolCodepoints } from 'react-material-symbols';
import { DateTime } from 'luxon';
import { CategoryKorType, CategoryType } from './types/common';
import { differenceInMonths, format, parse } from 'date-fns';
import { ko } from 'date-fns/locale';

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

// 2025-04-02 20:31:55"-> 2024.05.12
const formatDate = (dateString: string): string | null => {
  const date = DateTime.fromFormat(dateString, 'yyyy-MM-dd HH:mm:ss'); //.fromISO(start);
  return date.toFormat('yyyy.LL.dd');
};
const convertDateFormat = (isoString: string | null): string | null => {
  if (isoString === null) {
    return null;
  }

  // ISO 문자열을 Luxon DateTime 객체로 변환
  const dateTime = DateTime.fromISO(isoString);
  return dateTime.toFormat('yyyy-MM-dd HH:mm:ss');
};

const getNowUnixTimestamp = (): number => {
  const milliseconds = new Date().getTime();
  return Math.floor(milliseconds / 1000);
};

const formatDateKor = (dateString: string): string => {
  const date = DateTime.fromISO(dateString);
  return date.toFormat('yyyy년 LL월 dd일'); // 2024년 5월 17일
};

// 문자열 24 14:19:24 GMT+0900 (한국) --> yyyy년 LL월 dd일
const formatStringDateKor = (dateString: string): string => {
  return format(dateString, 'yyyy년 LL월 dd일', { locale: ko });
};

const formatTimeRange = (start: string, end: string): string => {
  const startTime = DateTime.fromFormat(start, 'yyyy-MM-dd HH:mm:ss');
  const endTime = DateTime.fromFormat(end, 'yyyy-MM-dd HH:mm:ss');
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

  return Math.floor(daysDifference);
};

const calculateDiffMonths = (startDateStr: string, endDateStr: string): number => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  return differenceInMonths(endDate, startDate);
};

export {
  getTagIcon,
  getTagName,
  getTagNameKor,
  formatDate,
  formatDateKor,
  formatTimeRange,
  calculateDays,
  convertDateFormat,
  getNowUnixTimestamp,
  calculateDiffMonths,
  formatStringDateKor,
};
