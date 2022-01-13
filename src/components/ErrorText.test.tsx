import React from 'react';
import { render } from '@testing-library/react-native';

import ErrorText from './ErrorText';

describe('ErrorText', () => {
  it('shows the error message', () => {
    const { queryByText } = render(<ErrorText>some error message</ErrorText>);

    expect(queryByText('some error message')).toBeTruthy();
  });
});
