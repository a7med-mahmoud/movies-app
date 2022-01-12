import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { openPicker } from 'react-native-image-crop-picker';

interface ImagePickerProps {
  value: string;
  onChange?: (imageURL: string) => void;
}

const ImagePicker: React.FC<ImagePickerProps> = React.memo(
  ({ value, onChange }) => {
    const handlePress = useCallback(async () => {
      const image = await openPicker({
        cropping: true,
        width: 400,
        height: 600,
      });

      onChange?.(image.path);
      console.log(image.path);
    }, [onChange]);

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={handlePress}
        accessibilityLabel="Select image">
        <FastImage
          source={value ? { uri: value } : require('../assets/add-image.png')}
          resizeMode="contain"
          style={styles.preview}
        />
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '40%',
  },
  preview: {
    aspectRatio: 2 / 3,
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default ImagePicker;
