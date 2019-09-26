import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input placeholder="Nome" />
        <input type="email" placeholder="Preencha seu email" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
