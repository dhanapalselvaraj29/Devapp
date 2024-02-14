import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import InputContainer from '../Molecules/InputContainer';
import {DARK_PURPLE} from '../Assets/colors';
import Container from '../Molecules/Container';
import {DpTouchableOpacity, DpView, H2} from '../Atoms';

const EditTask = () => {
  return (
    <DpView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={DARK_PURPLE} />
      <Container title={'Edit Task'} showIcon={true} />
      <DpView style={styles.container}>
        <DpView style={styles.inputBox}>
          <InputContainer placeholder={'Title'} />
          <InputContainer placeholder={'Description'} />
        </DpView>
        <DpView>
          <DpTouchableOpacity onPress={undefined} style={styles.updateButton}>
            <H2>Update</H2>
          </DpTouchableOpacity>
        </DpView>
      </DpView>
    </DpView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  inputBox: {
    flex: 1,
  },
});

export default EditTask;
