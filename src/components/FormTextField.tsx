import React from 'react';
import { StyleSheet, Text, TextInputProps, View } from 'react-native';
import { useField } from 'formik';

import Colors from '../theme/colors';
import TextField from './TextField';

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

      {hasError && <Text style={styles.error}>{meta.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  error: {
    color: Colors.error,
    fontSize: 14,
  },
});

export default FormTextField;
