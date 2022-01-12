import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import TextField from './TextField';

describe('TextField', () => {
  it('calls onChange on text change', () => {
    const onChange = jest.fn();
    const { container } = render(
      <TextField value="" onChangeText={onChange} />,
    );

    fireEvent.changeText(container, 'some text');

    expect(onChange).toBeCalledWith('some text');
  });
});
