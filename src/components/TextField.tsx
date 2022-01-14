import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

import Colors from '../theme/colors';

interface TextFieldProps extends TextInputProps {
  hasError?: boolean;
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({
  hasError,
  label,
  style,
  ...inputProps
}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        style={[styles.input, hasError && styles.inputError, style]}
        {...inputProps}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
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
});

export default TextField;
