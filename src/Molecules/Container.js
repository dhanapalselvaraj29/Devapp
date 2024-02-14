import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DARK_COLOR, DARK_PURPLE} from '../Assets/colors';
import {H1, DpView} from '../Atoms';

const Container = ({title, showIcon}) => {
  return (
    <DpView style={styles.headerContainer}>
      {showIcon && (
        <DpView style={styles.icons}>
          <Icon name="arrow-back" size={30} color={DARK_COLOR} />
        </DpView>
      )}
      <DpView style={styles.headerText}>
        <H1>{title}</H1>
      </DpView>
    </DpView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: DARK_PURPLE,
    flexDirection: 'row',
    paddingVertical: 15,
    minHeight: 100,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Container;
