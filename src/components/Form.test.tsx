import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import Form from './Form';

describe('Form', () => {
  it('shows submit button', () => {
    const { findByRole } = render(
      <Form initialValues={{}} onSubmit={() => {}} />,
    );

    expect(findByRole('button')).toBeTruthy();
  });

  it('shows submit button with submit text', () => {
    const { queryByText } = render(
      <Form submitText="Login" initialValues={{}} onSubmit={() => {}} />,
    );

    expect(queryByText('Login')).toBeTruthy();
  });

  it('submits form on submit button press', async () => {
    const onSubmit = jest.fn();
    const values = { username: 'jack' };
    const { getByRole } = render(
      <Form initialValues={values} onSubmit={onSubmit} />,
    );

    const button = getByRole('button');

    fireEvent.press(button);

    await waitFor(() => {
      expect(onSubmit).toBeCalledWith(values, expect.anything());
    });
  });
});
