import {
  Action,
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  initialState,
  reducer,
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

  it('returns resets data on fetch init', () => {
    const state = reducer(
      {
        movies: SAMPLE_MOVIES,
        isLoading: false,
        error: 'Something went wrong',
      },
      { type: FETCH_INIT },
    );

    expect(state.isLoading).toBe(true);
    expect(state.movies).toEqual([]);
    expect(state.error).toBeNull();
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

  it('sets error and resets movies and loading on fetch failure', () => {
    const state = reducer(undefined, {
      type: FETCH_FAILURE,
      payload: 'Some error',
    });

    expect(state.isLoading).toBe(false);
    expect(state.movies).toEqual([]);
    expect(state.error).toBe('Some error');
  });
});
