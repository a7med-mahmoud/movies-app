import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import faker from 'faker';

import DateField from './DateField';

describe('DateField', () => {
  it('changes date on confirm date button pressed', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <DateField label="Date" value={new Date()} onChange={onChange} />,
    );

    const confirmButton = getByTestId('confirm-date');

    const date = faker.date.past();
    fireEvent.press(confirmButton, date);

    expect(onChange).toBeCalledWith(date);
  });
});
