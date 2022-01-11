import React from 'react';
import { render } from '@testing-library/react-native';

import ErrorBox from './ErrorBox';

describe('ErrorBox', () => {
  it('shows the error message', () => {
    const { getByText } = render(<ErrorBox error="some error message" />);

    expect(getByText('some error message')).toBeTruthy();
  });
});
