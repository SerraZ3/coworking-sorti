import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background-color: #FFFAFA;
    width: 100vw;
    overflow-x: hidden;
  }
  html,
  body {
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
