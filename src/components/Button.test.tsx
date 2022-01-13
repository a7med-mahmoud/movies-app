import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Button from './Button';

describe('Button', () => {
  it('renders text correctly', () => {
    const { queryByText } = render(<Button>I'm a Button</Button>);

    expect(queryByText("I'm a Button")).toBeTruthy();
  });

  it('handles press event successfully', () => {
    const onPress = jest.fn();
    const { container } = render(<Button onPress={onPress}>Button</Button>);

    fireEvent.press(container);

    expect(onPress).toBeCalled();
  });
});
