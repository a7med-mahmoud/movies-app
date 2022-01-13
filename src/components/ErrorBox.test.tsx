import React from 'react';
import { render } from '@testing-library/react-native';

import ErrorBox from './ErrorBox';

describe('ErrorBox', () => {
  it('shows the error message', () => {
    const { queryByText } = render(<ErrorBox error="some error message" />);

    expect(queryByText('some error message')).toBeTruthy();
  });
});
