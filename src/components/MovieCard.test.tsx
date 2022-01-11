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
    const { getByText } = render(<MovieCard movie={MOVIE} />);

    expect(getByText(MOVIE.title)).toBeTruthy();
    expect(getByText(MOVIE.overview)).toBeTruthy();
  });

  it('navigates to details on press', () => {
    const { getByText } = render(<MovieCard movie={MOVIE} />);

    fireEvent.press(getByText(/movie/i));

    expect(mockNavigate).toBeCalledWith('MovieDetails', { movie: MOVIE });
  });
});
