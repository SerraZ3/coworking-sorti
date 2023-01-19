import { createGlobalStyle } from "styled-components";

// font-family: 'Lato', sans-serif;

const GlobalStyle = createGlobalStyle`
  body {
   font-family: 'Roboto', sans-serif;
    background-color: #FFFAFA;
    width: 100vw;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
