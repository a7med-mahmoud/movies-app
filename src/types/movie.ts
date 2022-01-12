interface Movie {
  id: number | string;
  title: string;
  overview: string;
  poster_path?: string | null;
  release_date: string;
}

export default Movie;
