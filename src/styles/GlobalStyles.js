import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #1e1e1e;
    color: #ffffff;
  }

  h1, h2, h3 {
    color: #ff4081; /* Color vibrante */
  }

  button {
    background-color: #673ab7;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #ff4081;
  }
`;

export default GlobalStyles;
