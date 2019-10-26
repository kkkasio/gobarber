/* eslint-disable react/prop-types */
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/Components/Background';
import Appointment from '~/Components/Appointment';
import { Container, Text, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Text>Agendamentos</Text>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
