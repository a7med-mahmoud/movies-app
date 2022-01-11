import React from 'react';
import { render } from '@testing-library/react-native';

import MovieSectionHeader from './MovieSectionHeader';

describe('MovieSectionHeader', () => {
  it('renders section title correctly', () => {
    const { getByText } = render(<MovieSectionHeader title="My Title" />);

    expect(getByText('My Title')).toBeTruthy();
  });

  it('render add movie button if title is "My Movies"', () => {
    const { getByA11yLabel } = render(<MovieSectionHeader title="My Movies" />);

    expect(getByA11yLabel('Add Movie')).toBeTruthy();
  });
});
