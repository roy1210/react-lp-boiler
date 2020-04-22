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

  html {
  /* Memo: Make root font size to 10px */
  font-size: 62.5% !important;
  height: 100%;
}

  /* Memo: To make footer attached to the bottom  */
  #root{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .footer-pusher {
    flex: 1;
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
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
  font-family: "D-DIN";
  src: url(/src/styles/fonts/D-DIN.woff) format("woff");
}

body,
h1,
h2,
h3,
h4,
p,
span,
ul,
li,
a {
  font-family: "D-DIN", -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


  .align-self {
    align-self: center;
  }

`;
