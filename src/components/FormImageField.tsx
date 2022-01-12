import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import ImageField from './ImageField';
import ErrorText from './ErrorText';

interface FormImageFieldProps {
  name: string;
}

const FormImageField: React.FC<FormImageFieldProps> = ({
  name,
  ...inputProps
}) => {
  const [field, meta, helpers] = useField(name);

  const hasError = meta.touched && !!meta.error;

  const onChange = useCallback(
    (imageURL: string) => helpers.setValue(imageURL),
    [helpers],
  );

  return (
    <View style={styles.container}>
      <ImageField
        value={field.value}
        hasError={hasError}
        onChange={onChange}
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

export default FormImageField;
