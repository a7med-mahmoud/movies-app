import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import ImageField from './ImageField';
import ErrorText from './ErrorText';

interface FormImageFieldProps {
  name: string;
}

const FormImageField: React.FC<FormImageFieldProps> = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const hasError = meta.touched && !!meta.error;

  return (
    <View style={styles.container}>
      <ImageField
        value={field.value}
        hasError={hasError}
        onChange={imageURL => helpers.setValue(imageURL)}
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
