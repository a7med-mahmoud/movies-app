import React from 'react';
import { render } from '@testing-library/react-native';

import ErrorText from './ErrorText';

describe('ErrorText', () => {
  it('shows the error message', () => {
    const { getByText } = render(<ErrorText>some error message</ErrorText>);

    expect(getByText('some error message')).toBeTruthy();
  });
});
