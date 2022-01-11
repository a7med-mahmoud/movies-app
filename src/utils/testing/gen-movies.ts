import faker from 'faker';

import type { Movie } from '../../hooks/use-movies';

function genMovies(count = 3): Movie[] {
  return new Array(count).fill(null).map(() => ({
    id: Math.random(),
    title: faker.name.title(),
    overview: faker.lorem.lines(3),
    release_date: faker.date.past().toDateString(),
    poster_path: '/' + faker.image.image().split('/').pop(),
  }));
}

export default genMovies;
