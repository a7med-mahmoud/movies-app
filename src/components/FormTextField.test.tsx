import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import * as Yup from 'yup';

import Form from './Form';
import FormTextField from './FormTextField';

describe('FormTextField', () => {
  it('captures text input', async () => {
    const onSubmit = jest.fn();
    const { getByRole, getByLabelText } = render(
      <Form initialValues={{ title: '' }} onSubmit={onSubmit}>
        <FormTextField label="Title" name="title" />
      </Form>,
    );

    const field = getByLabelText('Title');
    const button = getByRole('button');

    act(() => {
      fireEvent.changeText(field, 'hello');
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(onSubmit).toBeCalledWith({ title: 'hello' }, expect.anything());
    });
  });

  it('shows error message on error', async () => {
    const onSubmit = jest.fn();

    const validationSchema = Yup.object({
      title: Yup.string().min(5, 'min 5 letters').required(),
    });

    const { getByRole, getByLabelText, queryByText } = render(
      <Form
        initialValues={{ title: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <FormTextField label="Title" name="title" />
      </Form>,
    );

    const field = getByLabelText('Title');
    const button = getByRole('button');

    act(() => {
      fireEvent.changeText(field, 'hi');
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(queryByText('min 5 letters')).toBeTruthy();
      expect(onSubmit).not.toBeCalled();
    });
  });
});
