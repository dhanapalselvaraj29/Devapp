import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {WHITE_COLOR} from './colors';

const H3 = ({children, style}) => {
  return <Text style={[styles.Text3, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  Text3: {
    fontSize: 15,
    fontFamily: 'Jost',
  },
});

export default H3;
