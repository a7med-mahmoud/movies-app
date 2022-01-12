import React from 'react';
import {
  Dimensions,
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

const { width } = Dimensions.get('window');
// Item Width = Screen Width - Padding (15 * 2) - Space Between Items (5 * 2)
const ITEM_WIDTH = width - 30 - 10;
const ITEM_HEIGHT = ITEM_WIDTH * (3 / 2);

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
const getItemLayout = (_: unknown, index: number) => ({
  index,
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index + 10,
});
const renderSection: ListRenderItem<{
  movies: Movie[];
  isLoading?: boolean;
  onLoadMore?: () => void;
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
      getItemLayout={getItemLayout}
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
      data: [{ key: 'user-movies', movies: userMovies, onAdd: onAddUserMovie }],
    },
    {
      title: 'All Movies',
      data: [{ key: 'all-movies', movies: allMovies, isLoading, onLoadMore }],
    },
  ];

  if (error) {
    return <ErrorBox error={error} />;
  }

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
