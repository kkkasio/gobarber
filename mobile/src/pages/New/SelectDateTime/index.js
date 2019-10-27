import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/Components/Background';
// import { Container } from './styles';

export default function SelectDateTime() {
  return <Background />;
}
SelectDateTime.navigationOptions = {
  title: 'Selecione um horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}>
      <Icon name="chevron-left" size={25} color="#fff" />
    </TouchableOpacity>
  ),
};
