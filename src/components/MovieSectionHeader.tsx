import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import type Movie from '../types/movie';
import AddMovie from './AddMovie';

interface MovieSectionHeaderProps {
  title: string;
  onAdd?: (movie: Movie) => void;
}

const MovieSectionHeader: React.FC<MovieSectionHeaderProps> = React.memo(
  ({ title, onAdd }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {onAdd && <AddMovie onAdd={onAdd} />}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    padding: 15,
  },
});

export default MovieSectionHeader;
