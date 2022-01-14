import Movie from '../types/movie';

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
  nextPage: number;
}

export const initialState: State = {
  movies: [],
  isLoading: false,
  error: null,
  nextPage: 1,
};

function moviesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        nextPage: state.nextPage + 1,
        movies:
          state.nextPage === 1
            ? action.payload
            : [...state.movies, ...action.payload],
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default moviesReducer;
