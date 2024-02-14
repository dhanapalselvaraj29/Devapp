import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {WHITE_COLOR} from '../Assets/colors';

const H1 = ({children, style}) => {
  return <Text style={[styles.Text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
    fontFamily: 'Jost',
  },
});

export default H1;
