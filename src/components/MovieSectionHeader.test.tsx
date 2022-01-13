import React from 'react';
import { render } from '@testing-library/react-native';

import MovieSectionHeader from './MovieSectionHeader';

describe('MovieSectionHeader', () => {
  it('renders section title correctly', () => {
    const { getByText } = render(<MovieSectionHeader title="My Title" />);

    expect(getByText('My Title')).toBeTruthy();
  });

  it('render add movie button if onAdd is passed', () => {
    const { getByLabelText } = render(
      <MovieSectionHeader title="My Movies" onAdd={() => {}} />,
    );

    expect(getByLabelText('Add Movie')).toBeTruthy();
  });
});
