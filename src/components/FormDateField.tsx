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
  ...inputProps
}) => {
  const [field, meta, helpers] = useField(name);

  const hasError = !!meta.error;

  function handleChange(date: Date) {
    helpers.setValue(date);
  }

  return (
    <View style={styles.container}>
      <DateField
        value={field.value}
        hasError={hasError}
        onChange={handleChange}
        {...inputProps}
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
