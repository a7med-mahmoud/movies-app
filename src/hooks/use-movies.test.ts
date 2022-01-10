import {
  Action,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  initialState,
  reducer,
  FETCH_INIT,
} from './use-movies';

const SAMPLE_MOVIES = [
  {
    id: 1,
    title: 'movie 1',
    overview: 'overview',
    release_date: '2021-12-1',
  },
  {
    id: 2,
    title: 'movie 2',
    overview: 'overview',
    release_date: '2021-11-6',
  },
  {
    id: 3,
    title: 'movie 3',
    overview: 'overview',
    release_date: '2020-09-1',
  },
];

describe('Movies Reducer', () => {
  it('returns default state if no action', () => {
    const state = reducer(undefined, {} as Action);

    expect(state).toEqual(initialState);
  });

  it('sets movies and resets loading and error on fetch success', () => {
    const state = reducer(undefined, {
      type: FETCH_SUCCESS,
      payload: SAMPLE_MOVIES,
    });

    expect(state.isLoading).toBe(false);
    expect(state.movies).toEqual(SAMPLE_MOVIES);
    expect(state.error).toBeNull();
  });

  it('sets error and resets loading only on fetch failure', () => {
    const state = reducer(
      { movies: SAMPLE_MOVIES, isLoading: true, error: null, nextPage: 1 },
      {
        type: FETCH_FAILURE,
        payload: 'Some error',
      },
    );

    expect(state.isLoading).toBe(false);
    expect(state.movies).toEqual(SAMPLE_MOVIES);
    expect(state.error).toBe('Some error');
  });

  it('sets loadings and resets error on fetch init', () => {
    const state = reducer(
      { movies: SAMPLE_MOVIES, isLoading: true, error: null, nextPage: 1 },
      { type: FETCH_INIT },
    );

    expect(state.isLoading).toBe(true);
    expect(state.movies).toEqual(SAMPLE_MOVIES);
    expect(state.error).toBe(null);
  });
});
