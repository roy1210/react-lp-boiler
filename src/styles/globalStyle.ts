import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";
import { theme } from "./theme";

export const customMedia = generateMedia({
  largeDesktop: "1700px",
  desktop: "1296px",
  laptop: "1172px",
  smallLaptop: "992px",
  tablet: "768px",
  mobile: "750px",
});

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  *:focus {
  outline: none;
  }

  /* Memo: To make footer attached to the bottom  */
  /* Need to define 'flex: 1;' in the div above the footer  */
  #root{
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    background-attachment: fixed;
    background-size: auto;
    background-color: ${theme.colors.navy};
    position: relative;
    padding: 0;
    margin: 0;
    font-style: normal;
    height: 100%;
    font-size: 1.6em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .align-self {
    align-self: center;
  }

`;
