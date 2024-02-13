import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DARK_PURPLE} from '../Atoms/colors';
import {DpView, H1} from '../Atoms';
const Container = ({Title, showIcon}) => {
  return (
    <DpView style={styles.headerContainer}>
      {showIcon && (
        <DpView style={styles.icons}>
          <Icon name="arrow-back" size={30} color="#000" />
        </DpView>
      )}
      <DpView style={styles.HeaderText}>
        <H1>{Title}</H1>
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
  HeaderText: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Container;
