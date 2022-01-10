import { useCallback, useEffect, useState } from 'react';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path?: string | null;
  release_date: string;
  vote_average: number;
  isByUser: boolean;
}

// Could've added the `API_KEY` in an env file for the seek of security
// but chose to keep it here for the app to be ready to use.
const API_KEY = 'acea91d2bff1c53e6604e4985b6989e2';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (!res.ok) {
        setError(data.status_message || 'Something went wrong!');
        return setIsLoading(false);
      }

      setMovies(data.results);
      setError(null);
      setIsLoading(false);
    } catch (err) {
      setError('Something went wrong!');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { movies, isLoading, error };
}

export default useMovies;
