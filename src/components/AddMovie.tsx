import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import type Movie from '../types/movie';
import Colors from '../theme/colors';
import AddMovieForm from './AddMovieForm';

interface AddMovieProps {
  onAdd: (movie: Movie) => void;
}

const AddMovie: React.FC<AddMovieProps> = React.memo(({ onAdd }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAdd = useCallback(
    (movie: Movie) => {
      onAdd(movie);
      setShowModal(false);
    },
    [onAdd],
  );

  return (
    <>
      <TouchableHighlight
        onPress={() => setShowModal(true)}
        style={styles.button}
        underlayColor={Colors.primaryDark}>
        <Text style={styles.plusIcon} accessibilityLabel="Add Movie">
          +
        </Text>
      </TouchableHighlight>

      <Modal
        animationType="slide"
        visible={showModal}
        transparent
        testID="add-movie-modal">
        <Pressable style={styles.overlay} onPress={() => setShowModal(false)} />

        <View style={styles.modalContent}>
          <KeyboardAwareScrollView style={styles.keyboardAvoiding}>
            <Text style={styles.modalTitle}>Add Movie</Text>
            <AddMovieForm onAdd={handleAdd} />
          </KeyboardAwareScrollView>
        </View>
      </Modal>
    </>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  keyboardAvoiding: {
    flex: 1,
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    paddingBottom: 25,
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  modalTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default AddMovie;
