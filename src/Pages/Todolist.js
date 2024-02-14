import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {DpView} from '../Atoms';
import CardList from '../Molecules/CardList';
import Container from '../Molecules/Container';
import {DARK_PURPLE, LIGHT_PURPLE} from '../Assets/colors';

const TodoList = () => {
  return (
    <DpView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor={DARK_PURPLE} />
      <Container title={'Todo app'} />
      <DpView style={styles.listRender}>
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
  mainContainer: {
    flex: 1,
    backgroundColor: LIGHT_PURPLE,
  },
  listRender: {
    padding: 15,
  },
});

export default TodoList;
