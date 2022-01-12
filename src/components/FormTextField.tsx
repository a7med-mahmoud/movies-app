import React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { useField } from 'formik';

import TextField from './TextField';
import ErrorText from './ErrorText';

interface FormTextFieldProps extends TextInputProps {
  name: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  ...inputProps
}) => {
  const [field, meta, helpers] = useField(name);

  const hasError = meta.touched && !!meta.error;

  return (
    <View style={styles.container}>
      <TextField
        value={field.value}
        onBlur={() => helpers.setTouched(true)}
        onChangeText={text => helpers.setValue(text)}
        hasError={hasError}
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

export default FormTextField;
