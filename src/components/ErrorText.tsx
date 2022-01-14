import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Theme from '../theme';

const ErrorText: React.FC = ({ children }) => {
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: Theme.colors.error,
    fontSize: 14,
  },
});

export default ErrorText;
