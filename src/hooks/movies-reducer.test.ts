import reducer, {
  Action,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  initialState,
  FETCH_INIT,
} from './movies-reducer';
import genMovies from '../utils/testing/gen-movies';

describe('Movies reducer', () => {
  it('returns default state if no action', () => {
    const state = reducer(undefined, {} as Action);

    expect(state).toEqual(initialState);
  });

  it('sets movies and resets loading/error on fetch success', () => {
    const movies = genMovies();
    const state = reducer(undefined, {
      type: FETCH_SUCCESS,
      payload: movies,
    });

    expect(state.isLoading).toBe(false);
    expect(state.movies).toEqual(movies);
    expect(state.error).toBeNull();
    expect(state.nextPage).toBe(2);
  });

  it('adds to movies and resets loading/error on fetch success with existing movies', () => {
    const existingMovies = genMovies();
    const newMovies = genMovies();

    const state = reducer(
      {
        error: null,
        isLoading: true,
        movies: existingMovies,
        nextPage: 2,
      },
      {
        type: FETCH_SUCCESS,
        payload: newMovies,
      },
    );

    expect(state.isLoading).toBe(false);
    expect(state.movies).toEqual([...existingMovies, ...newMovies]);
    expect(state.nextPage).toBe(3);
    expect(state.error).toBeNull();
  });

  it('sets error and resets loading only on fetch failure', () => {
    const movies = genMovies();

    const state = reducer(
      { movies, isLoading: true, error: null, nextPage: 2 },
      {
        type: FETCH_FAILURE,
        payload: 'Some error',
      },
    );

    expect(state.isLoading).toBe(false);
    expect(state.movies).toEqual(movies);
    expect(state.error).toBe('Some error');
    expect(state.nextPage).toBe(2);
  });

  it('sets loadings and resets error on fetch init', () => {
    const movies = genMovies();

    const state = reducer(
      { movies, isLoading: false, error: 'hey', nextPage: 2 },
      { type: FETCH_INIT },
    );

    expect(state.isLoading).toBe(true);
    expect(state.movies).toEqual(movies);
    expect(state.error).toBeNull();
    expect(state.nextPage).toBe(2);
  });
});
