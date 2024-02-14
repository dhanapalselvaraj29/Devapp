/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import InputContainer from '../Molecules/InputContainer';
import {DpTouchableOpacity, DpView, H2} from '../Atoms';
import Container from '../Molecules/Container';
import {DARK_PURPLE} from '../Assets/colors';

const AddTask = () => {
  const handleAddTask = () => {
    console.log('Input Value:');
  };

  return (
    <DpView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={DARK_PURPLE} />
      <Container title={'Add Task'} showIcon={true} />
      <DpView style={styles.container}>
        <DpView style={styles.inputBox}>
          <InputContainer placeholder={'Title'} />
          <InputContainer placeholder={'Description'} />
        </DpView>
        <DpView style={styles.addButtonContainer}>
          <DpTouchableOpacity onPress={handleAddTask} style={styles.addButton}>
            <H2>Add</H2>
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

export default AddTask;
