import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>14 de agosto</strong>
        <button type="button">
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Nome da pessoa</span>
        </Time>

        <Time avaliable>
          <strong>09:00</strong>
          <span>Em Aberto</span>
        </Time>

        <Time>
          <strong>10:00</strong>
          <span>Nome da pessoa</span>
        </Time>

        <Time>
          <strong>11:00</strong>
          <span>Nome da pessoa</span>
        </Time>
      </ul>
    </Container>
  );
}
