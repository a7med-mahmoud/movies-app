import React from 'react';

import MoviesList from '../components/MoviesList';
import useMovies from '../hooks/use-movies';

const AllMoviesScreen: React.FC = () => {
  const { movies, isLoading, error } = useMovies();

  return <MoviesList movies={movies} isLoading={isLoading} error={error} />;
};

export default AllMoviesScreen;
