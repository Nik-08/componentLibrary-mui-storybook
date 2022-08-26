import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica"
  }

  body {
    min-width: 320px;
  }
`;
