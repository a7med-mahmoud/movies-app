import React from 'react';

import MoviesList from '../components/MoviesList';
import useMovies from '../hooks/use-movies';

const MoviesScreen: React.FC = () => {
  const { movies, isLoading, error, fetchMovies } = useMovies();

  return (
    <MoviesList
      allMovies={movies}
      onLoadMore={fetchMovies}
      userMovies={[]} // TODO: add user movies
      isLoading={isLoading}
      error={error}
    />
  );
};

export default MoviesScreen;
