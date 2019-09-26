import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="email" placeholder="Preencha seu email" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Acessar</button>
        <Link to="/register">criar conta grátis!</Link>
      </form>
    </>
  );
}
