import React from 'react';
import {
  FlatList,
  ListRenderItem,
  SectionList,
  StyleSheet,
} from 'react-native';

import type Movie from '../types/movie';
import ErrorBox from './ErrorBox';
import Loading from './Loading';
import MovieCard from './MovieCard';
import MovieSectionHeader from './MovieSectionHeader';
import NoMovies from './NoMovies';

interface MoviesListProps {
  allMovies: Movie[];
  userMovies: Movie[];
  isLoading: boolean;
  error: string | null;
  onLoadMore: () => void;
  onAddUserMovie: (movie: Movie) => void;
}

const keyExtractor = (item: Movie) => item.id.toString();
const renderItem: ListRenderItem<Movie> = ({ item }) => (
  <MovieCard movie={item} />
);

const renderSection: ListRenderItem<{
  movies: Movie[];
  error?: string | null;
  isLoading?: boolean;
  onLoadMore?: () => void;
}> = ({ item }) => {
  const isLoadingMore = item.isLoading && item.movies.length > 0;

  if (item.isLoading && !isLoadingMore) {
    return <Loading large />;
  }

  if (item.error) {
    return <ErrorBox error={item.error} />;
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
      ListEmptyComponent={NoMovies}
    />
  );
};

interface SectionInfo {
  section: { title: string; onAdd?: (movie: Movie) => void };
}

const renderSectionHeader = ({ section }: SectionInfo) => (
  <MovieSectionHeader title={section.title} onAdd={section.onAdd} />
);

const MoviesList: React.FC<MoviesListProps> = ({
  allMovies,
  userMovies,
  isLoading,
  error,
  onLoadMore,
  onAddUserMovie,
}) => {
  const sections = [
    {
      title: 'My Movies',
      onAdd: onAddUserMovie,
      data: [{ key: 'user-movies', movies: userMovies }],
    },
    {
      title: 'All Movies',
      data: [
        { key: 'all-movies', movies: allMovies, isLoading, onLoadMore, error },
      ],
    },
  ];

  // Nested a FlatList inside a SectionList to use the `numColumns` prop
  // in order to make it 2 movies in a row.
  // Please note that the React Native team recommends composing Lists when needed
  // and this one of the cases we need to compose a FLatList and a SectionList
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
});

export default MoviesList;
