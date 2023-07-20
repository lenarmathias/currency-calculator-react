import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

export const GlobaStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    width: 800px;
    background-color: #222;
    max-width: 90%;
    font-family: 'Montserrat', sans-serif;
    background-image: url("${background}");
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;