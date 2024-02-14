import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {WHITE_COLOR} from '../Assets/colors';

const H2 = ({children, style}) => {
  return <Text style={[styles.Text2, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  Text2: {
    fontSize: 20,
    fontFamily: 'Jost',
  },
});

export default H2;
