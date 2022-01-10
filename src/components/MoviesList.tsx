import React, { useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Text,
} from 'react-native';

import type { Movie } from '../hooks/use-movies';
import Colors from '../theme/colors';
import ErrorBox from './ErrorBox';

interface MoviesListProps {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  isLoading,
  error,
}) => {
  const renderItem: ListRenderItem<Movie> = useCallback(({ item }) => {
    // TODO: change to a MovieCard component
    return <Text>{item.title}</Text>;
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.primary} />;
  }

  if (error) {
    return <ErrorBox error={error} />;
  }

  return <FlatList data={movies} renderItem={renderItem} />;
};

export default MoviesList;
