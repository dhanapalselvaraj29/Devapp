/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import {DpTextInput, DpView} from '../Atoms';

const InputContainer = ({placeholder}) => {
  return (
    <DpView style={styles.contentContainer}>
      <DpTextInput style={styles.inputWrapper} placeholder={placeholder} />
    </DpView>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {marginTop: 20},
});

export default InputContainer;
