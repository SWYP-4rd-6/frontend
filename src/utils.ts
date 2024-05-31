import { SymbolCodepoints } from 'react-material-symbols';
import { DateTime } from 'luxon';
import { CategoryKorType, CategoryType } from './types/common';
import { differenceInMonths, format, isValid, parse } from 'date-fns';
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
//2024-05-21 -> 2024.08.01
const formatDate2 = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = format(date, 'yyyy.MM.dd');
  return formattedDate;
};

// Date객체를 "YYYY-MM-DD" 형식으로 변환하는 함수
const formatOnlyDate = (date: Date | null): any => {
  return date && format(date, 'yyyy-MM-dd');
};

const formatDateString2 = (dateStr: string): any => {
  const isoFormat = /^\d{4}-\d{2}-\d{2}$/;

  // 이미 "YYYY-MM-DD" 형식인 경우 그대로 반환
  if (isoFormat.test(dateStr)) {
    return dateStr;
  }

  // 다른 형식의 문자열을 Date 객체로 파싱
  const parsedDate = parse(dateStr, "EEE MMM dd yyyy HH:mm:ss 'GMT'XXX (z) HH:mm:ss", new Date());

  // 유효한 날짜인지 확인
  if (!isValid(parsedDate)) {
    return;
    //throw new Error('Invalid date format');
  }

  return formatOnlyDate(parsedDate);
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

//문자열 "Thu May 30 2024 00:00:00 GMT+0900 (한국 표준시) 22:00:00"--> "2024-05-30"
const formatDateString = (dateStr: string) => {
  const isoFormat = /^\d{4}-\d{2}-\d{2}$/;

  if (isoFormat.test(dateStr)) {
    return dateStr;
  }

  const parsedDate = new Date(dateStr);

  const year = parsedDate.getFullYear();
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const day = String(parsedDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const extractHourMinute = (timeStr: string): string => {
  const parts = timeStr.split(':');
  return parts.slice(0, 2).join(':');
};

//"17:00~19:00 (2시간 소요)
const formatTimeRange = (start: string, end: string): string => {
  const startTime = DateTime.fromFormat(start, 'yyyy-MM-dd HH:mm:ss');
  const endTime = DateTime.fromFormat(end, 'yyyy-MM-dd HH:mm:ss');
  const startTimeString = startTime.toFormat('HH:mm');
  const endTimeString = endTime.toFormat('HH:mm');
  //const duration = endTime.diff(startTime, 'hours').hours; (${duration}시간 소요)
  return `${startTimeString}~${endTimeString}`;
};

//08:00:00 ->17:00
const formatTime = (inputTime: string) => {
  const time = parse(inputTime, 'HH:mm:ss', new Date());
  const formattedTime = format(time, 'HH:mm');
  return formattedTime;
};

//00:00:00 -> 넘버 시간  00
const extractHour = (timeString: string) => {
  const time = parse(timeString, 'HH:mm:ss', new Date());
  const hour = time.getHours();

  return hour;
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
  formatTime,
  calculateDays,
  convertDateFormat,
  getNowUnixTimestamp,
  calculateDiffMonths,
  formatStringDateKor,
  formatDate2,
  extractHour,
  formatDateString,
  formatDateString2,
  formatOnlyDate,
  extractHourMinute,
};
