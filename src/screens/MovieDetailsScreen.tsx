import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import FastImage from 'react-native-fast-image';
import type { StackScreenProps } from '@react-navigation/stack';

import type { MoviesParamList } from '../navigation/MoviesNavigator';
import getImage from '../utils/get-image';
import formatDate from '../utils/format-date';

const MovieDetailsScreen: React.FC<
  StackScreenProps<MoviesParamList, 'MovieDetails'>
> = ({ route }) => {
  const { movie } = route.params;

  const date = formatDate(movie.release_date);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainInfo}>
        <SharedElement
          id={`movie.${movie.id}.poster`}
          style={styles.posterContainer}>
          <FastImage
            source={{ uri: getImage(movie.poster_path, movie.isLocal) }}
            style={styles.poster}
          />
        </SharedElement>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>

      <Text style={styles.overview}>{movie.overview}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainInfo: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  posterContainer: {
    width: '50%',
  },
  poster: {
    aspectRatio: 2 / 3,
    borderRadius: 15,
  },
  container: {
    padding: 15,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
  },
  overview: {
    color: 'black',
    fontSize: 18,
    opacity: 0.8,
    lineHeight: 24,
  },
});

export default MovieDetailsScreen;
