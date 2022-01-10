import React from 'react';
import { render } from '@testing-library/react-native';

import ErrorBox from './ErrorBox';

describe('ErrorBox', () => {
  it('shows the error message', () => {
    const { getByTestId } = render(<ErrorBox error="some error message" />);

    const text = getByTestId('error-text');
    expect(text).toHaveTextContent('some error message');
  });
});
