import React from "react";
import { GlobalStyle, customMedia } from "./styles/globalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import { Path } from "./data/constants";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <SidePadding>
        <Router>
          <Switch>
            <Route path={Path.ROOT} component={Main} />
          </Switch>
        </Router>
      </SidePadding>
      {/* Memo: make Footer stick on bottom */}
      <div className="footer-pusher" />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;

const SidePadding = styled.div`
  padding: 0 4rem;
  ${customMedia.lessThan("mobile")`
    padding: 0 2rem;
  `}
`;
