import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import type Movie from '../types/movie';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import MoviesScreen from '../screens/MoviesScreen';

export type MoviesParamList = {
  Movies: undefined;
  MovieDetails: { movie: Movie };
};

const Stack = createSharedElementStackNavigator<MoviesParamList>();

const MoviesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={MoviesScreen} />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{ headerTitle: 'Movie Details' }}
        sharedElements={route => [`movie.${route.params.movie.id}.poster`]}
      />
    </Stack.Navigator>
  );
};

export default MoviesNavigator;
