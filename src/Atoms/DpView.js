import React from 'react';
import {View, StyleSheet} from 'react-native';

const DpView = ({children, style}) => {
  return <View style={[styles.View, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  View: {},
});

export default DpView;
