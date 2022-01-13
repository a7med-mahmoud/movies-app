import React, { useState } from 'react';

import DatePicker from 'react-native-date-picker';
import formatDate from '../utils/format-date';
import today from '../utils/today';

import TextField from './TextField';

export interface DateFieldProps {
  hasError?: boolean;
  value?: Date;
  max?: Date;
  placeholder?: string;
  onChange?: (date: Date) => void;
}

const DateField: React.FC<DateFieldProps> = React.memo(
  ({ value, onChange, hasError, max, placeholder }) => {
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
        <TextField
          value={value && formatDate(value)}
          hasError={hasError}
          placeholder={placeholder}
          onPressIn={handleOpen}
          onFocus={handleOpen}
        />

        <DatePicker
          modal
          mode="date"
          maximumDate={max}
          open={isOpen}
          date={value || today()}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </>
    );
  },
);

export default DateField;
