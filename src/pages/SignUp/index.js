import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(event) {
    console.tron.log(event);
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O E-mail é obrigatório'),
    name: Yup.string().required('O nomé é obrigatório'),
    password: Yup.string()
      .required('A Senha é obrigatória')
      .min(6, 'No mínimo 6 caracteres'),
  });

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
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
