
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    weidth: 100%;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: 'NanumSquare', sans-serif !important;
    background-color: #f9f9f9;  
  }

  #root {
    height: 100%;
  }

`;
