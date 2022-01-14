import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import * as Yup from 'yup';
import faker from 'faker';

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

    const title = faker.lorem.words(3);
    act(() => {
      fireEvent.changeText(field, title);
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(onSubmit).toBeCalledWith({ title }, expect.anything());
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

    const title = faker.lorem.word(1 + Math.floor(3 * Math.random())); // word with length of 1-4
    act(() => {
      fireEvent.changeText(field, title);
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(queryByText('min 5 letters')).toBeTruthy();
      expect(onSubmit).not.toBeCalled();
    });
  });
});
