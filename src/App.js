// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import MusicSurvey from './components/MusicSurvey';
import AgricultureAI from './components/AgricultureAI';
import RenewableEnergyAI from './components/RenewableEnergyAI';

// Definimos los estilos globales
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    color: #333333;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input, textarea {
    font-family: inherit;
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MusicSurvey />} />
        <Route path="/agriculture-ai" element={<AgricultureAI />} />
        <Route path="/renewable-energy-ai" element={<RenewableEnergyAI />} />
      </Routes>
    </Router>
  );
};

export default App;
