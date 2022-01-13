import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import DateField from './DateField';

describe('DateField', () => {
  it('changes date on confirm date button pressed', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<DateField onChange={onChange} />);

    const confirmButton = getByTestId('confirm-date');

    fireEvent.press(confirmButton);

    expect(onChange).toBeCalled();
  });
});
