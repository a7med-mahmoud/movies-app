import React from 'react';
import {
  FlatList,
  ListRenderItem,
  SectionList,
  StyleSheet,
  Text,
} from 'react-native';

import type { Movie } from '../hooks/use-movies';
import ErrorBox from './ErrorBox';
import Loading from './Loading';
import MovieCard from './MovieCard';

interface MoviesListProps {
  allMovies: Movie[];
  userMovies: Movie[];
  isLoading: boolean;
  error: string | null;
  onLoadMore: () => void;
}

const keyExtractor = (item: Movie) => item.id.toString();
const renderItem: ListRenderItem<Movie> = ({ item }) => (
  <MovieCard movie={item} />
);
const renderSection: ListRenderItem<{
  movies: Movie[];
  isLoading: boolean;
  onLoadMore: () => void;
}> = ({ item }) => {
  const isLoadingMore = item.isLoading && item.movies.length > 0;

  if (item.isLoading && !isLoadingMore) {
    return <Loading large />;
  }

  return (
    <FlatList
      style={styles.list}
      data={item.movies}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
      onEndReachedThreshold={0.5}
      onEndReached={item.onLoadMore}
      ListFooterComponent={isLoadingMore ? Loading : null}
    />
  );
};
const renderSectionHeader = (info: { section: { title: string } }) => (
  <Text style={styles.title}>{info.section.title}</Text>
);

const MoviesList: React.FC<MoviesListProps> = ({
  allMovies,
  userMovies,
  isLoading,
  error,
  onLoadMore,
}) => {
  const sections = [
    { title: 'My Movies', data: [{ movies: userMovies, isLoading: false }] },
    {
      title: 'All Movies',
      data: [{ movies: allMovies, isLoading, onLoadMore }],
    },
  ];

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
