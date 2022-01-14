import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

import Theme from '../theme';

interface ButtonProps extends TouchableHighlightProps {}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  ...touchableProps
}) => {
  return (
    <TouchableHighlight
      style={[styles.button, style]}
      underlayColor={Theme.colors.primaryDark}
      accessibilityRole="button"
      {...touchableProps}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: Theme.borderRadii.sm,
    backgroundColor: Theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
