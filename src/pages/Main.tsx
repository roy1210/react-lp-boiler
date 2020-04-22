import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Roadmap from "../components/Roadmap";

const Main = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Products />
      <Announcement />
      <Roadmap />
    </>
  );
};

export default Main;
