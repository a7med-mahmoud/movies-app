import React from 'react';
import { Pressable } from 'react-native';
import type { DatePickerProps } from 'react-native-date-picker';

const MockDatePicker: React.FC<DatePickerProps> = ({ onConfirm }) => {
  function handleConfirm(date: Date) {
    if (onConfirm) {
      onConfirm(date);
    }
  }

  return (
    <Pressable
      testID="confirm-date"
      // Passing the data from `fireEvent` (which will be a Date) to the `handleConfirm` just to control chosen date
      onPress={(date: unknown) => handleConfirm(date as Date)}
    />
  );
};

export default MockDatePicker;
