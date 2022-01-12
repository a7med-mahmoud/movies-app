import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../theme/colors';

const ErrorText: React.FC = ({ children }) => {
  return <Text style={styles.error}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: Colors.error,
    fontSize: 14,
  },
});

export default ErrorText;
