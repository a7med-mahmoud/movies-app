import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import * as Yup from 'yup';

import Form from './Form';
import FormImageField from './FormImageField';

jest.mock('react-native-image-crop-picker', () => ({
  openPicker: () => ({ path: 'image.jpg' }),
}));

describe('FormImageField', () => {
  it('captures image input', async () => {
    const onSubmit = jest.fn();
    const { getByRole, getByLabelText } = render(
      <Form initialValues={{ image: '' }} onSubmit={onSubmit}>
        <FormImageField name="image" />
      </Form>,
    );

    const selectImage = getByLabelText('Select image');
    const button = getByRole('button');

    act(() => {
      fireEvent.press(selectImage);
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(onSubmit).toBeCalledWith(
        { image: 'image.jpg' },
        expect.anything(),
      );
    });
  });

  it('shows error message on error', async () => {
    const onSubmit = jest.fn();

    const validationSchema = Yup.object({
      image: Yup.string().required('image is required'),
    });

    const { getByRole, queryByText } = render(
      <Form
        initialValues={{ image: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <FormImageField name="image" />
      </Form>,
    );

    const button = getByRole('button');

    fireEvent.press(button);

    await waitFor(() => {
      expect(queryByText('image is required')).toBeTruthy();
      expect(onSubmit).not.toBeCalled();
    });
  });
});
