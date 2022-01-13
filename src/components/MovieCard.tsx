import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import type Movie from '../types/movie';
import type { MoviesParamList } from '../navigation/MoviesNavigator';
import getImage from '../utils/get-image';
import formatDate from '../utils/format-date';
import useCardDimensions from '../hooks/use-card-dimensions';

interface MovieCardProps {
  movie: Movie;
}

export function getCardDimensions(
  screenWidth: number,
  padding = 15,
  spaceBetween = 5,
) {
  const width = screenWidth / 2 - padding - spaceBetween;
  const height = width * 1.5;
  return { width, height };
}

const MovieCard: React.FC<MovieCardProps> = React.memo(({ movie }) => {
  const navigation = useNavigation<NavigationProp<MoviesParamList, 'Movies'>>();
  const dimensions = useCardDimensions();

  const date = formatDate(movie.release_date);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetails', { movie })}
      style={[styles.container, dimensions]}>
      <SharedElement
        id={`movie.${movie.id}.poster`}
        style={StyleSheet.absoluteFill}>
        <View style={[dimensions, styles.poster]}>
          <FastImage
            source={{ uri: getImage(movie.poster_path, movie.isLocal) }}
            style={StyleSheet.absoluteFill}
          />
        </View>
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
    borderRadius: 15,
    overflow: 'hidden',
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
    overflow: 'hidden',
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
