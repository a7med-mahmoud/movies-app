import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import * as Yup from 'yup';
import faker from 'faker';

import Form from './Form';
import FormDateField from './FormDateField';
import today from '../utils/today';

describe('FormDateField', () => {
  it('captures date input', async () => {
    const onSubmit = jest.fn();
    const { getByRole, getByTestId } = render(
      <Form initialValues={{ date: new Date() }} onSubmit={onSubmit}>
        <FormDateField label="Date" name="date" />
      </Form>,
    );

    const confirmDate = getByTestId('confirm-date');
    const button = getByRole('button');

    const date = faker.date.future();
    act(() => {
      fireEvent.press(confirmDate, date);
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(onSubmit).toBeCalledWith({ date }, expect.anything());
    });
  });

  it('shows error message on error', async () => {
    const onSubmit = jest.fn();

    const validationSchema = Yup.object({
      date: Yup.date().min(today(), 'must be a future date').required(),
    });

    const { getByRole, getByTestId, queryByText } = render(
      <Form
        initialValues={{ date: new Date('2021-12-31') }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <FormDateField label="Date" name="date" />
      </Form>,
    );

    const confirmDate = getByTestId('confirm-date');
    const button = getByRole('button');

    const date = faker.date.past();
    act(() => {
      fireEvent.press(confirmDate, date);
    });

    fireEvent.press(button);

    await waitFor(() => {
      expect(queryByText('must be a future date')).toBeTruthy();
      expect(onSubmit).not.toBeCalled();
    });
  });
});
