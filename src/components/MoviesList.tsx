import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';

import type { Movie } from '../hooks/use-movies';
import Colors from '../theme/colors';
import ErrorBox from './ErrorBox';
import MovieCard from './MovieCard';

interface MoviesListProps {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const keyExtractor = (item: Movie) => item.id.toString();
const renderItem: ListRenderItem<Movie> = ({ item }) => (
  <MovieCard movie={item} />
);

const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.primary} />;
  }

  if (error) {
    return <ErrorBox error={error} />;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={styles.list}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    // to remove the gap from the edges of the screen
    margin: -5,
  },
});

export default MoviesList;
