import React from 'react';
import '~/config/ReactotronConfig';
import { StatusBar } from 'react-native';
import Routes from './routes';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
