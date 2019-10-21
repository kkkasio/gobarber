import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { FaSpinner } from 'react-icons/fa';
import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
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
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu melhor email" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit" loading={loading ? 1 : 0}>
          {loading ? <FaSpinner color="#fff" size={25} /> : 'Acessar'}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
