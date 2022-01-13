import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { openPicker } from 'react-native-image-crop-picker';

import Colors from '../theme/colors';

interface ImageFieldProps {
  value: string;
  hasError?: boolean;
  onChange?: (imageURL: string) => void;
}

const ImageField: React.FC<ImageFieldProps> = React.memo(
  ({ value, hasError, onChange }) => {
    async function handleSelect() {
      const image = await openPicker({
        cropping: true,
        width: 400,
        height: 600,
      });

      if (onChange) {
        onChange(image.path);
      }
    }

    function handleClear() {
      if (onChange) {
        onChange('');
      }
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleSelect}
          accessibilityLabel="Select image">
          <FastImage
            source={value ? { uri: value } : require('../assets/add-image.png')}
            resizeMode="contain"
            style={[styles.preview, hasError && styles.fieldError]}
          />
        </TouchableOpacity>

        {!!value && (
          <Pressable
            style={styles.clearButton}
            onPress={handleClear}
            accessibilityLabel="Clear image">
            <Text style={styles.clearIcon}>×</Text>
          </Pressable>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '40%',
    marginBottom: 8,
  },
  preview: {
    aspectRatio: 2 / 3,
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  fieldError: {
    borderColor: Colors.error,
    backgroundColor: Colors.errorBg,
  },
  clearButton: {
    position: 'absolute',
    top: -7,
    right: -7,
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error,
  },
  clearIcon: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ImageField;
