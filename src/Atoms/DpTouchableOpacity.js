import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {DARK_PURPLE} from './colors';
import {H2} from '.';

const DpTouchableOpacity = ({children, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.TouchableOpacity, style]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: DARK_PURPLE,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DpTouchableOpacity;
