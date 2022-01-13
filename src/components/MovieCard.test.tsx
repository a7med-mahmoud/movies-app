import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import MovieCard from './MovieCard';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockNavigate }),
}));

const MOVIE = {
  id: 1,
  title: 'movie 1',
  overview: 'overview',
  release_date: '2021-12-1',
};

describe('MovieCard', () => {
  it('renders movie details', () => {
    const { queryByText } = render(<MovieCard movie={MOVIE} />);

    expect(queryByText(MOVIE.title)).toBeTruthy();
    expect(queryByText(MOVIE.overview)).toBeTruthy();
  });

  it('navigates to details on press', () => {
    const { getByText } = render(<MovieCard movie={MOVIE} />);

    fireEvent.press(getByText(MOVIE.title));

    expect(mockNavigate).toBeCalledWith('MovieDetails', { movie: MOVIE });
  });
});
