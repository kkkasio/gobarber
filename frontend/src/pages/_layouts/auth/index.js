import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  const loading = useSelector(state => state.auth.loading);
  return (
    <Wrapper>
      <Content loading={loading ? 1 : 0}>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
