import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

import Theme from '../theme';

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
    color: Theme.colors.dark,
    marginBottom: 2,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: Theme.borderRadii.sm,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    fontSize: 16,
    marginBottom: 8,
  },
  inputError: {
    borderColor: Theme.colors.error,
    backgroundColor: Theme.colors.errorBg,
  },
});

export default TextField;
