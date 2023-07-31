import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0; // Tira bordas
  }

  body {
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
  }
`;
