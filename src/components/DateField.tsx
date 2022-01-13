import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

import TextField from './TextField';
import formatDate from '../utils/format-date';

export interface DateFieldProps {
  hasError?: boolean;
  value: Date;
  max?: Date;
  label: string;
  placeholder?: string;
  onChange?: (date: Date) => void;
}

const DateField: React.FC<DateFieldProps> = React.memo(
  ({ value, onChange, label, hasError, max, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleConfirm(date: Date) {
      setIsOpen(false);
      if (onChange) {
        onChange(date);
      }
    }

    function handleOpen() {
      setIsOpen(true);
    }

    function handleCancel() {
      setIsOpen(false);
    }

    return (
      <>
        <TouchableOpacity onPress={handleOpen}>
          <View pointerEvents="none">
            <TextField
              value={formatDate(value)}
              label={label}
              hasError={hasError}
              placeholder={placeholder}
              onFocus={handleOpen}
            />
          </View>
        </TouchableOpacity>

        <DatePicker
          modal
          mode="date"
          maximumDate={max}
          open={isOpen}
          date={value}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </>
    );
  },
);

export default DateField;
