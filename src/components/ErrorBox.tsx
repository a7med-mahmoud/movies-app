import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../theme/colors';

interface ErrorBoxProps {
  error: string;
}

const ErrorBox: React.FC<ErrorBoxProps> = React.memo(({ error }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.errorBg,
    borderRadius: 10,
    padding: 15,
  },
  text: {
    color: Colors.error,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ErrorBox;
