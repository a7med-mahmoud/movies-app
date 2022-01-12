import React, { useCallback, useState } from 'react';

import type Movie from '../types/movie';
import MoviesList from '../components/MoviesList';
import useMovies from '../hooks/use-movies';

const MoviesScreen: React.FC = () => {
  const [userMovies, setUserMovies] = useState<Movie[]>([]);
  const { movies, isLoading, error, fetchMovies } = useMovies();

  const handleAddUserMovie = useCallback((movie: Movie) => {
    setUserMovies(currentMovies => [movie, ...currentMovies]);
  }, []);

  return (
    <MoviesList
      allMovies={movies}
      onLoadMore={fetchMovies}
      isLoading={isLoading}
      error={error}
      userMovies={userMovies}
      onAddUserMovie={handleAddUserMovie}
    />
  );
};

export default MoviesScreen;
