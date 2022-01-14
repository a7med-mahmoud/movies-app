import { Source } from 'react-native-fast-image';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w400';

function getImage(path?: string | null, isLocal?: boolean): Source | number {
  if (path) {
    const uri = isLocal ? path : IMAGE_BASE_URL + path;

    return { uri };
  }

  return require('../assets/no-poster.jpeg');
}

export default getImage;
