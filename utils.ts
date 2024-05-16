import { SymbolCodepoints } from 'react-material-symbols';
import { DateTime } from 'luxon';

const getTagIcon = (tag: string): SymbolCodepoints => {
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

const getTagName = (tag: string) => {
  switch (tag) {
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
      return '/';
  }
};

const formatDate = (dateString: string): string => {
  const date = DateTime.fromISO(dateString);
  return date.toFormat('yyyy.LL.dd'); // 2024.05.12
};

const formatTimeRange = (start: string, end: string): string => {
  const startTime = DateTime.fromISO(start);
  const endTime = DateTime.fromISO(end);
  const startTimeString = startTime.toFormat('HH:mm');
  const endTimeString = endTime.toFormat('HH:mm');

  const duration = endTime.diff(startTime, 'hours').hours;
  return `${startTimeString}~${endTimeString} (${duration}시간 소요)`; //"17:00~19:00 (2시간 소요)
};

export { getTagIcon, getTagName, formatDate, formatTimeRange };