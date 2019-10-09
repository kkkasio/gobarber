import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}
  return (
    <Container>
      <Form initialData={profile}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu melhor email" />
        <hr />
        <Input
          type="passowrd"
          name="oldPassowrd"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="newPassword"
          placeholder="Confirmação da senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="submit">Sair GoBarber</button>
    </Container>
  );
}
