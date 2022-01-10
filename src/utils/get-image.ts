export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w400';

function getImage(path?: string | null, isLocal?: boolean) {
  if (path) {
    return isLocal ? path : IMAGE_BASE_URL + path;
  }

  return 'https://via.placeholder.com/400x600';
}

export default getImage;
