import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import Colors from '../theme/colors';

interface TextFieldProps extends TextInputProps {
  hasError?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  hasError,
  style,
  ...inputProps
}) => {
  return (
    <TextInput
      style={[styles.input, hasError && styles.inputError, style]}
      {...inputProps}
    />
  );
};

const styles = StyleSheet.create({
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
});

export default TextField;
