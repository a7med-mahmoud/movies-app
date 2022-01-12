import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';

import Colors from '../theme/colors';

interface ButtonProps extends TouchableHighlightProps {}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  ...touchableProps
}) => {
  return (
    <TouchableHighlight
      style={[styles.button, style]}
      underlayColor={Colors.primaryDark}
      {...touchableProps}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default Button;
