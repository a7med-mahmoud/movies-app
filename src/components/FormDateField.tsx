import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import DateField, { DateFieldProps } from './DateField';
import ErrorText from './ErrorText';

interface FormDateFieldProps extends DateFieldProps {
  name: string;
}

const FormDateField: React.FC<FormDateFieldProps> = ({
  name,
  ...fieldProps
}) => {
  const [field, meta, helpers] = useField(name);

  const hasError = meta.touched && !!meta.error;

  return (
    <View style={styles.container}>
      <DateField
        value={field.value}
        hasError={hasError}
        onChange={date => helpers.setValue(date)}
        {...fieldProps}
      />

      {hasError && <ErrorText>{meta.error}</ErrorText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default FormDateField;
