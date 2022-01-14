import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Theme from '../theme';

interface ErrorBoxProps {
  error: string;
}

const ErrorBox: React.FC<ErrorBoxProps> = React.memo(({ error }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text} testID="error-text">
        {error}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  box: {
    backgroundColor: Theme.colors.errorBg,
    borderRadius: Theme.borderRadii.sm,
    padding: 15,
    marginHorizontal: 15,
  },
  text: {
    color: Theme.colors.error,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ErrorBox;
