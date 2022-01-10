import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

import Colors from '../theme/colors';

interface AddMovieProps {}

const AddMovie: React.FC<AddMovieProps> = React.memo(() => {
  return (
    <TouchableHighlight
      onPress={() => {}}
      style={styles.button}
      underlayColor={Colors.primaryDark}
      accessibilityLabel="Add Movie">
      <Text
        style={styles.plusIcon}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants">
        +
      </Text>
    </TouchableHighlight>
  );
});

const styles = StyleSheet.create({
  button: {
    height: 35,
    width: 35,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  plusIcon: {
    color: 'white',
    fontSize: 24,
  },
});

export default AddMovie;
