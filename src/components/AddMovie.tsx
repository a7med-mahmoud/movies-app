import React, { useState } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';

import Colors from '../theme/colors';

const AddMovie: React.FC = React.memo(() => {
  const [showModal, setShowModal] = useState(false);

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

      <Modal animationType="slide" visible={showModal} transparent>
        <Pressable style={styles.overlay} onPress={() => setShowModal(false)}>
          {/* Added a Pressable inside the Pressable so the parent Pressable doesn't respond to the press events on its child */}
          <Pressable style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Movie</Text>
            {/* TODO: create an add movie form */}
            {/* <AddMovieForm onSubmit={handleSubmit} /> */}
          </Pressable>
        </Pressable>
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
  },
});

export default AddMovie;
