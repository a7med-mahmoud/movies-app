import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AddMovie from './AddMovie';

interface MovieSectionHeaderProps {
  title: string;
}

const MovieSectionHeader: React.FC<MovieSectionHeaderProps> = React.memo(
  ({ title }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {/* TODO: handle add movie on AddMovie button */}
        {title === 'My Movies' && <AddMovie />}
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
