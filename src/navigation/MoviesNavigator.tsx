import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import type { Movie } from '../hooks/use-movies';
import MoviesScreen from '../screens/MoviesScreen';

export type MoviesParamList = {
  Movies: undefined;
  MovieDetails: { movie: Movie };
};

const Stack = createSharedElementStackNavigator();

const MoviesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen
        name="MovieDetails"
        component={MoviesScreen}
        sharedElements={route => [`movie.${route.params.movie.id}.poster`]}
      />
    </Stack.Navigator>
  );
};

export default MoviesNavigator;
