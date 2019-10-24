import React from 'react';
import { View } from 'react-native';
import Bacgrkound from '~/Components/Background';
import Input from '~/Components/Input';
import Button from '~/Components/Button';

// import { Container } from './styles';

export default function SignIn() {
  return (
    <Bacgrkound>
      <View>
        <Input icon="face" placeholder="Digite seu nome" />
        <Button>Entrar</Button>
      </View>
    </Bacgrkound>
  );
}
