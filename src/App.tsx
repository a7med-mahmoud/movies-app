import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import MoviesList from './components/MoviesList';
import useMovies from './hooks/use-movies';

const App: React.FC = () => {
  const { movies, isLoading, error } = useMovies();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <Text style={styles.title}>Movies</Text>

        <MoviesList movies={movies} isLoading={isLoading} error={error} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default App;
