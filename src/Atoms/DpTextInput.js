import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {DARK_PURPLE, LIGHT_BLACK} from './colors';

const DpTextInput = ({style, ...props}) => {
  return <TextInput style={[styles.TextInput, style]} {...props} />;
};

const styles = StyleSheet.create({
  TextInput: {
    color: DARK_PURPLE,
    borderBottomWidth: 2,
    borderBottomColor: LIGHT_BLACK,
    borderBottomStartRadius: 50,
  },
});

export default DpTextInput;
