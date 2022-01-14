import React from 'react';
import { Formik, FormikConfig, FormikValues } from 'formik';

import Button from './Button';

interface FormProps<Values extends FormikValues> extends FormikConfig<Values> {
  children: React.ReactNode;
  submitText?: string;
}

function Form<Values>({
  children,
  submitText = 'Submit',
  ...formikProps
}: FormProps<Values>) {
  return (
    <Formik {...formikProps}>
      {({ handleSubmit }) => (
        <>
          {children}
          <Button onPress={handleSubmit}>{submitText}</Button>
        </>
      )}
    </Formik>
  );
}

export default Form;
