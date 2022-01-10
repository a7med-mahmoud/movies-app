import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MovieSectionHeaderProps {
  title: string;
}

const MovieSectionHeader: React.FC<MovieSectionHeaderProps> = React.memo(
  ({ title }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {/* {title === 'My Movies' && <AddMovie />} */}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    padding: 15,
    backgroundColor: '#f2f2f2',
  },
});

export default MovieSectionHeader;
