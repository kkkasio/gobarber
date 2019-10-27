import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateInput from '~/Components/DateInput';

import Background from '~/Components/Background';

import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());
  console.tron.log(date);
  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}
SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione um horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={25} color="#fff" />
    </TouchableOpacity>
  ),
});
