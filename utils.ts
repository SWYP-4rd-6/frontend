import { SymbolCodepoints } from 'react-material-symbols';

const getTagIcon = (tag: string): SymbolCodepoints => {
  switch (tag) {
    case 'DINING':
      return 'restaurant';
    case 'OUTDOOR':
      return 'nature';
    default:
      return 'nature';
  }
};

const getTagName = (tag: string) => {
  switch (tag) {
    case 'DINING':
      return '먹거리';
    case 'OUTDOOR':
      return '야외활동';
    default:
      return '/';
  }
};

export { getTagIcon, getTagName };
