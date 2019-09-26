import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(event) {
    console.tron.log(event);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="email" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Preencha seu email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Acessar</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
