import React, { useState, useMemo } from 'react';

import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM ", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={() => handlePrevDay()}>
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={() => handleNextDay()}>
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
