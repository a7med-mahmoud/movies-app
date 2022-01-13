import React from 'react';
import { render } from '@testing-library/react-native';

import MovieSectionHeader from './MovieSectionHeader';

describe('MovieSectionHeader', () => {
  it('renders section title correctly', () => {
    const { queryByText } = render(<MovieSectionHeader title="My Title" />);

    expect(queryByText('My Title')).toBeTruthy();
  });

  it('render add movie button if onAdd is passed', () => {
    const { getByLabelText } = render(
      <MovieSectionHeader title="My Movies" onAdd={() => {}} />,
    );

    expect(getByLabelText('Add Movie')).toBeTruthy();
  });
});
