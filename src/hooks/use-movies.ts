import { useCallback, useEffect, useReducer } from 'react';
import Config from 'react-native-config';

import moviesReducer, {
  FETCH_FAILURE,
  FETCH_INIT,
  FETCH_SUCCESS,
  initialState,
} from './movies-reducer';

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${Config.API_KEY}`;

function useMovies() {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const fetchMovies = useCallback(async () => {
    if (state.isLoading) {
      return;
    }

    dispatch({ type: FETCH_INIT });

    try {
      const res = await fetch(`${API_URL}&page=${state.nextPage}`);
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
  }, [state.nextPage, state.isLoading]);

  useEffect(() => {
    fetchMovies();
    // I want it to run on mount only so I don't care if fetchMovies changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state, fetchMovies };
}

export default useMovies;
