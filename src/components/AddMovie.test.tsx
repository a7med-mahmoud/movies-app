import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import AddMovie from './AddMovie';

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

  it.todo('hides add movie modal on overlay press');
  it.todo('hides add movie modal on add finishes');
});
