import React from 'react';
import {DpView, H2, H3} from '../Atoms';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WHITE_COLOR} from '../Atoms/colors';

const CardList = ({title, description}) => {
  return (
    <DpView style={styles.maincontainer}>
      <DpView style={styles.Textcontainer}>
        <H3>{title}</H3>
        <H3>{description}</H3>
      </DpView>
      <DpView style={styles.iconcontainer}>
        <Icon name="edit" size={30} color="#B3B7EE" />
        <Icon name="delete" size={30} color="#B3B7EE" />
      </DpView>
    </DpView>
  );
};
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: WHITE_COLOR,
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  Textcontainer: {
    flex: 1,
    justifyContent: 'center',
  },

  iconcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardList;
