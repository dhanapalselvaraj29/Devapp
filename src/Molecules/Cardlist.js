import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DARK_PURPLE, WHITE_COLOR} from '../Assets/colors';
import {H3, DpView} from '../Atoms';

const CardList = ({title, description}) => {
  return (
    <DpView style={styles.mainContainer}>
      <DpView style={styles.textContainer}>
        <H3>{title}</H3>
        <H3>{description}</H3>
      </DpView>
      <DpView style={styles.iconContainer}>
        <Icon name="edit" size={30} color={DARK_PURPLE} />
        <Icon name="delete" size={30} color={DARK_PURPLE} />
      </DpView>
    </DpView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: WHITE_COLOR,
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardList;
