import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import AddMovie from './AddMovie';
import AddMovieForm from './AddMovieForm';

describe('AddMovie', () => {
  it('shows add movie modal on add button press', () => {
    const { getByLabelText, getByTestId } = render(
      <AddMovie onAdd={() => {}} />,
    );

    const addButton = getByLabelText(/add movie/i);
    const modal = getByTestId('add-movie-modal');

    fireEvent.press(addButton);

    expect(modal).toHaveProp('visible', true);
  });

  it('hides add movie modal on overlay press', () => {
    const { getByTestId, getByLabelText } = render(
      <AddMovie onAdd={() => {}} />,
    );

    const addButton = getByLabelText(/add movie/i);
    const overlay = getByTestId('overlay');
    const modal = getByTestId('add-movie-modal');

    fireEvent.press(addButton);
    fireEvent.press(overlay);

    expect(modal).toHaveProp('visible', false);
  });

  it('hides add movie modal on add finishes', () => {
    const { getByLabelText, getByTestId, container } = render(
      <AddMovie onAdd={() => {}} />,
    );

    const addButton = getByLabelText(/add movie/i);
    const form = container.findByType(AddMovieForm);
    const modal = getByTestId('add-movie-modal');

    fireEvent.press(addButton);
    fireEvent(form, 'add');

    expect(modal).toHaveProp('visible', false);
  });
});
