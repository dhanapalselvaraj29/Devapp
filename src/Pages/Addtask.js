import React from 'react';
import {DARK_PURPLE} from '../Atoms/colors';
import {StyleSheet, StatusBar} from 'react-native';
import {useState} from 'react';
import Container from '../Molecules/Container';
import Inputcontainer from '../Molecules/Inputcontainer';
import {DpTouchableOpacity, DpView, H2} from '../Atoms';

const Addtask = () => {
  const handleAddTask = () => {
    console.log('Input Value:');
  };
  return (
    <DpView style={styles.maincontainer}>
      <StatusBar barStyle="light-content" backgroundColor={DARK_PURPLE} />
      <Container Title={'Add Task'} showIcon={true} />
      <DpView style={styles.container}>
        <DpView style={styles.inputbox}>
          <Inputcontainer placeholder={'Title'} />
          <Inputcontainer placeholder={'Description'} />
        </DpView>
        <DpView style={{}}>
          <DpTouchableOpacity onPress={handleAddTask} style={styles}>
            <H2 style={{}}>Add</H2>
          </DpTouchableOpacity>
        </DpView>
      </DpView>
    </DpView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  inputbox: {
    flex: 1,
  },
});

export default Addtask;
