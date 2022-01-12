import React from 'react';
import { render } from '@testing-library/react-native';

import MoviesList from './MoviesList';
import genMovies from '../utils/testing/gen-movies';

jest.mock('@react-navigation/native', () => ({ useNavigation: jest.fn() }));

describe('MoviesList', () => {
  it("show no movies when there's no movies", () => {
    const { getAllByText } = render(
      <MoviesList
        allMovies={[]}
        userMovies={[]}
        error={null}
        isLoading={false}
        onLoadMore={() => {}}
        onAddUserMovie={() => {}}
      />,
    );

    expect(getAllByText(/no movies/i)).toHaveLength(2);
  });

  it("shows loading when it's loading", () => {
    const { getByTestId } = render(
      <MoviesList
        allMovies={[]}
        userMovies={[]}
        error={null}
        isLoading={true}
        onLoadMore={() => {}}
        onAddUserMovie={() => {}}
      />,
    );

    expect(getByTestId('loading')).toBeTruthy();
  });

  it("shows error when there's an error", () => {
    const { getByText } = render(
      <MoviesList
        allMovies={[]}
        userMovies={[]}
        error="something went wrong"
        isLoading={false}
        onLoadMore={() => {}}
        onAddUserMovie={() => {}}
      />,
    );

    expect(getByText('something went wrong')).toBeTruthy();
  });

  it('renders movies correctly', () => {
    const allMovies = genMovies();
    const userMovies = genMovies();

    const { getByText } = render(
      <MoviesList
        allMovies={allMovies}
        userMovies={userMovies}
        error={null}
        isLoading={false}
        onLoadMore={() => {}}
        onAddUserMovie={() => {}}
      />,
    );

    const movies = [...allMovies, ...userMovies];
    movies.forEach(movie => {
      expect(getByText(movie.title)).toBeTruthy();
    });
  });
});
