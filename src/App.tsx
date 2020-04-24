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
      {/* Memo: using outer-container and page-wrap to prohibit scrolling when click hamburger menu */}
      <div id="outer-container">
        <Header />
        <SidePadding id="page-wrap">
          <Router>
            <Switch>
              <Route path={Path.ROOT} component={Main} />
            </Switch>
          </Router>
        </SidePadding>
        {/* <div className="Footer-pusher" /> */}
        <Footer />
      </div>
      <GlobalStyle />
    </>
  );
};

export default App;

const SidePadding = styled.div`
  padding: 0 24rem;

  ${customMedia.lessThan("desktop")`
       padding: 0 8rem;
     `}
  ${customMedia.lessThan("laptop")`
       padding: 0 2rem;
     `}
`;
