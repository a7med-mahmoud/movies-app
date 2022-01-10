import getImage, { IMAGE_BASE_URL } from './get-image';

describe('getImage util', () => {
  describe('API images', () => {
    it('returns a placeholder when no path', () => {
      const image = getImage();

      expect(image).toBeTruthy();
    });

    it('returns appends image base URL', () => {
      const image = getImage('/image.jpg');

      expect(image).toBe(IMAGE_BASE_URL + '/image.jpg');
    });
  });

  describe('Local images', () => {
    it('returns a placeholder when no path', () => {
      const image = getImage(null, true);

      expect(image).toBeTruthy();
    });

    it('returns same image path', () => {
      const image = getImage('/images/hey.jpg', true);

      expect(image).toBe('/images/hey.jpg');
    });
  });
});
