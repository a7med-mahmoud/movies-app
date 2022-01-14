import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';

import AddMovieForm from './AddMovieForm';

jest.mock('react-native-image-crop-picker', () => ({
  openPicker: () => ({ path: 'work-it.png' }),
}));

describe('AddMovieForm', () => {
  it("doesn't submit if data is invalid", async () => {
    const onAdd = jest.fn();
    const { getByRole, queryByText } = render(<AddMovieForm onAdd={onAdd} />);

    const submitButton = getByRole('button');

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(onAdd).not.toBeCalled();

      expect(queryByText(/title.+required/i)).toBeTruthy();
      expect(queryByText(/overview.+required/i)).toBeTruthy();
    });
  });

  it('submits form if data is valid', async () => {
    const onAdd = jest.fn();
    const { getByRole, getByLabelText, getByTestId } = render(
      <AddMovieForm onAdd={onAdd} />,
    );

    const titleField = getByLabelText(/title/i);
    const overviewField = getByLabelText(/overview/i);
    const confirmDateButton = getByTestId('confirm-date');
    const submitButton = getByRole('button');
    const selectImage = getByLabelText('Select image');

    act(() => {
      fireEvent.press(selectImage);
      fireEvent.changeText(titleField, 'Work it');
      fireEvent.changeText(overviewField, 'some overview text');
      fireEvent.press(confirmDateButton, new Date('August 7, 2020'));
    });

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(onAdd).toBeCalledWith({
        id: expect.any(String),
        title: 'Work it',
        overview: 'some overview text',
        release_date: new Date('August 7, 2020').toDateString(),
        poster_path: 'work-it.png',
        isLocal: true,
      });
    });
  });
});
