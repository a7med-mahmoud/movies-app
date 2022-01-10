import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SectionList,
  StyleSheet,
  Text,
} from 'react-native';

import type { Movie } from '../hooks/use-movies';
import Colors from '../theme/colors';
import ErrorBox from './ErrorBox';
import MovieCard from './MovieCard';

interface MoviesListProps {
  allMovies: Movie[];
  userMovies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const keyExtractor = (item: Movie) => item.id.toString();
const renderItem: ListRenderItem<Movie> = ({ item }) => (
  <MovieCard movie={item} />
);
const renderSection: ListRenderItem<{ movies: Movie[] }> = ({ item }) => (
  <FlatList
    data={item.movies}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
    numColumns={2}
    style={styles.list}
  />
);
const renderSectionHeader = (info: { section: { title: string } }) => (
  <Text style={styles.title}>{info.section.title}</Text>
);

const MoviesList: React.FC<MoviesListProps> = ({
  allMovies,
  userMovies,
  isLoading,
  error,
}) => {
  const sections = [
    { title: 'My Movies', data: [{ movies: userMovies }] },
    { title: 'All Movies', data: [{ movies: allMovies }] },
  ];

  if (isLoading) {
    return <ActivityIndicator size="large" color={Colors.primary} />;
  }

  if (error) {
    return <ErrorBox error={error} />;
  }

  return (
    <SectionList
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderSection}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    padding: 15,
    backgroundColor: '#eee',
  },
});

export default MoviesList;
