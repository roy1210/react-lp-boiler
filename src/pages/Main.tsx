import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import Roadmap from "../components/Roadmap";
import EmailSubscription from "../components/EmailSubscription";
import News from "../components/News";

const Main = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Products />
      <Announcement />
      <Roadmap />
      <News />
      <EmailSubscription />
    </>
  );
};

export default Main;
