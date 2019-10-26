import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/Components/Background';
// import { Container } from './styles';

export default function Profile() {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabe: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
