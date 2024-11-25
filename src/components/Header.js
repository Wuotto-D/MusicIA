// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #333333;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.8em;
  color: #ffffff;
  font-weight: 600;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Predicción de Preferencias Musicales</Title>
    </HeaderContainer>
  );
};

export default Header;
