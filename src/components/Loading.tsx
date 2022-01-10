import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import Colors from '../theme/colors';

interface LoadingProps {
  large?: boolean;
}

const Loading: React.FC<LoadingProps> = React.memo(({ large }) => {
  return (
    <ActivityIndicator
      style={styles.loader}
      size={large ? 'large' : 'small'}
      color={Colors.primary}
    />
  );
});

const styles = StyleSheet.create({
  loader: {
    marginVertical: 10,
  },
});

export default Loading;
