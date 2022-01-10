import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const NoMovies: React.FC = React.memo(() => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/movie.png')} />
      <Text style={styles.text}>No Movies Yet</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: '#555',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default NoMovies;
