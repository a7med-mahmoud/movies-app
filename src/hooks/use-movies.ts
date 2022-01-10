import { useCallback, useEffect, useReducer } from 'react';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string | null;
  release_date: string;
}

// Could've added the `API_KEY` in an env file for the seek of security
// but chose to keep it here for the app to be ready to use.
const API_KEY = 'acea91d2bff1c53e6604e4985b6989e2';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

export const FETCH_INIT = 'FETCH_INIT';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
type FetchInitAction = { type: typeof FETCH_INIT };
type FetchSccessAction = { type: typeof FETCH_SUCCESS; payload: Movie[] };
type FetchFailureAction = { type: typeof FETCH_FAILURE; payload: string };
export type Action = FetchInitAction | FetchSccessAction | FetchFailureAction;

export interface State {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}
export const initialState: State = {
  movies: [],
  isLoading: true,
  error: null,
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_INIT:
      return {
        isLoading: true,
        error: null,
        movies: [],
      };
    case FETCH_SUCCESS:
      return {
        isLoading: false,
        error: null,
        movies: action.payload,
      };
    case FETCH_FAILURE:
      return {
        isLoading: false,
        error: action.payload,
        movies: [],
      };
    default:
      return state;
  }
}

function useMovies() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchMovies = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (!res.ok) {
        return dispatch({
          type: FETCH_FAILURE,
          payload: data.status_message || 'Something went wrong',
        });
      }

      dispatch({
        type: FETCH_SUCCESS,
        payload: data.results,
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAILURE,
        payload: 'Something went wrong',
      });
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return state;
}

export default useMovies;