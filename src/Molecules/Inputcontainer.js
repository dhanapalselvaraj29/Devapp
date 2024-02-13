/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import {DARK_PURPLE} from '../Atoms/colors';
import {DpTextInput, DpView} from '../Atoms';

const Inputcontainer = ({placeholder}) => {
  return (
    <DpView styles={styles.contentContainer}>
      <DpTextInput style={styles.inputWrapper} placeholder={placeholder} />
    </DpView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {},
  inputWrapper: {marginTop: 20},
});

export default Inputcontainer;
