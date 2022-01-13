import React from 'react';
import { Pressable } from 'react-native';
import type { DatePickerProps } from 'react-native-date-picker';
import faker from 'faker';

const MockDatePicker: React.FC<DatePickerProps> = ({ onConfirm }) => {
  function handleConfirm() {
    if (onConfirm) {
      onConfirm(faker.date.past());
    }
  }

  return <Pressable testID="confirm-date" onPress={handleConfirm} />;
};

export default MockDatePicker;
