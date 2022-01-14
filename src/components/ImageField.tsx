import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Toast from 'react-native-simple-toast';
import { openPicker } from 'react-native-image-crop-picker';

import Theme from '../theme';

interface ImageFieldProps {
  value: string;
  hasError?: boolean;
  onChange?: (imageURL: string) => void;
}

const ImageField: React.FC<ImageFieldProps> = React.memo(
  ({ value, hasError, onChange }) => {
    async function handleSelect() {
      try {
        const image = await openPicker({
          cropping: true,
          width: 400,
          height: 600,
        });

        if (onChange) {
          onChange(image.path);
        }
      } catch (err) {
        if (__DEV__) {
          console.error(err);
        }

        Toast.show('Failed to pick an image');
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
    borderRadius: Theme.borderRadii.md,
    borderColor: Theme.colors.border,
    borderWidth: 1,
  },
  fieldError: {
    borderColor: Theme.colors.error,
    backgroundColor: Theme.colors.errorBg,
  },
  clearButton: {
    position: 'absolute',
    top: -7,
    right: -7,
    height: 30,
    width: 30,
    borderRadius: Theme.borderRadii.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.error,
  },
  clearIcon: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ImageField;
