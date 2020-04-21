import React from "react";
import { GlobalStyle, customMedia } from "./styles/globalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import styled from "styled-components";

const App = (): JSX.Element => {
  return (
    <>
      <Header />

      <SidePadding>
        <Hero />
      </SidePadding>

      {/* Memo: make Footer stick on bottom */}
      <div style={{ flex: 1 }} />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;

const SidePadding = styled.div`
  padding: 0 2em;
  ${customMedia.lessThan("mobile")`
  padding: 0 1em;
  `}
`;
