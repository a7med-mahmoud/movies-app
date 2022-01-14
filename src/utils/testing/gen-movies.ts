import faker from 'faker';
import { nanoid } from 'nanoid';

import type Movie from '../../types/movie';

function genMovies(count = 3): Movie[] {
  return new Array(count).fill(null).map(() => ({
    id: nanoid(),
    title: faker.name.title(),
    overview: faker.lorem.lines(3),
    release_date: faker.date.past().toDateString(),
    poster_path: '/' + faker.image.image().split('/').pop(),
  }));
}

export default genMovies;
