import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import { customMedia } from "../styles/globalStyle";

const Main = (): JSX.Element => {
  return (
    <>
      <Hero />
      <SidePadding>
        <Products />
        <Announcement />
      </SidePadding>
    </>
  );
};

export default Main;

const SidePadding = styled.div`
   padding: 0 12rem;

    ${customMedia.lessThan("desktop")`
      padding: 0 8rem;
    `}
    ${customMedia.lessThan("laptop")`
      padding: 0 2rem;
    `}
    ${customMedia.lessThan("smallLaptop")`
      padding: 0
    `}
`;
