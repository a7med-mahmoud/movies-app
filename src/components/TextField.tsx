import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { useField } from 'formik';

import Colors from '../theme/colors';

interface TextFieldProps extends TextInputProps {
  name: string;
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  style,
  ...inputProps
}) => {
  const [field, meta, helpers] = useField(name);

  const hasError = meta.touched && !!meta.error;

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, hasError && styles.inputError, style]}
        value={field.value}
        onBlur={() => helpers.setTouched(true)}
        onChangeText={text => helpers.setValue(text)}
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
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    marginBottom: 8,
  },
  inputError: {
    borderColor: Colors.error,
    backgroundColor: Colors.errorBg,
  },
  error: {
    color: Colors.error,
    fontSize: 14,
  },
});

export default TextField;
