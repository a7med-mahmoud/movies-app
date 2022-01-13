import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ImageField from './ImageField';

jest.mock('react-native-image-crop-picker', () => ({
  openPicker: () => ({ path: 'poster.jpg' }),
}));

describe('ImageField', () => {
  it('picks image on select image pressed', async () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <ImageField value="" onChange={onChange} />,
    );

    const selectImage = getByLabelText('Select image');

    await fireEvent.press(selectImage);

    expect(onChange).toBeCalledWith('poster.jpg');
  });

  it('clears image on clear icon pressed', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <ImageField value="poster.jpg" onChange={onChange} />,
    );

    const clearIcon = getByLabelText('Clear image');

    fireEvent.press(clearIcon);

    expect(onChange).toBeCalledWith('');
  });
});
