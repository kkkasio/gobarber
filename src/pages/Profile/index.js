import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
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
