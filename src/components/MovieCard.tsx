import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import LinearGradient from 'react-native-linear-gradient';

import type { Movie } from '../hooks/use-movies';
import type { MoviesParamList } from '../navigation/MoviesNavigator';
import getImage from '../utils/get-image';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = React.memo(({ movie }) => {
  const navigation = useNavigation<NavigationProp<MoviesParamList, 'Movies'>>();

  const date = useMemo(
    () => new Date(movie.release_date).toLocaleDateString(),
    [movie.release_date],
  );

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetails', { movie })}
      style={styles.container}>
      <SharedElement
        id={`movie.${movie.id}.poster`}
        style={StyleSheet.absoluteFill}>
        <Image
          source={{ uri: getImage(movie.poster_path) }}
          style={[StyleSheet.absoluteFill, styles.poster]}
        />
      </SharedElement>

      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
        style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.overview} numberOfLines={3}>
          {movie.overview}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    aspectRatio: 2 / 3,
    borderRadius: 15,
    overflow: 'hidden',
    flex: 1,
    margin: 5,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    paddingTop: 60,
  },
  poster: {
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  overview: {
    color: 'white',
    opacity: 0.8,
  },
});

export default MovieCard;
