import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import Theme from '../theme';

interface LoadingProps {
  large?: boolean;
}

const Loading: React.FC<LoadingProps> = React.memo(({ large }) => {
  return (
    <ActivityIndicator
      testID="loading"
      style={styles.loader}
      size={large ? 'large' : 'small'}
      color={Theme.colors.primary}
    />
  );
});

const styles = StyleSheet.create({
  loader: {
    marginVertical: 10,
  },
});

export default Loading;
