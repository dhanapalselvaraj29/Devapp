import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {DARK_PURPLE, LIGHT_PURPLE} from '../Atoms/colors';
import {DpView} from '../Atoms';
import Container from '../Molecules/Container';
import CardList from '../Molecules/Cardlist';

const Todolist = () => {
  return (
    <DpView style={styles.maincontainer}>
      <StatusBar barStyle="light-content" backgroundColor={DARK_PURPLE} />
      <Container Title={'Todo app'} />
      <DpView style={styles.listrender}>
        <CardList
          title={'Wake-up early'}
          description={'Help me to do daily task early'}
        />
        <CardList
          title={'Wake-up early'}
          description={'Help me to do daily task early'}
        />
        <CardList
          title={'Wake-up early'}
          description={'Help me to do daily task early'}
        />
      </DpView>
    </DpView>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: LIGHT_PURPLE,
  },
  listrender: {
    padding: 15,
  },
});
export default Todolist;
