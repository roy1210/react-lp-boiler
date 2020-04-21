import React from "react";
import { HeroContainer } from "../styles/components/Hero.styles";
import { Icon } from "semantic-ui-react";
import rectangle from "../resources/rectangle.svg";
import { ButtonA } from "../styles/customButton";

const Hero = (): JSX.Element => {
  return (
    <HeroContainer>
      <div className="wrapper">
        <div className="announcement">
          <p className="align-self top">
            TOP Announcement
            <img src={rectangle} alt="rectangle" className="align-self" />
          </p>
          <div className="contents align-self">
            <div>
              <p>lorem and ipsum to lorem ipsum</p>
              <p>on June 8,2020</p>
            </div>
            <Icon name="arrow right" className="align-self arrow" />
          </div>
        </div>
        <div className="title">
          <h1>
            Eirmod <span>sed</span> voluptua
          </h1>
          <h1>Subía ceniza inocentes</h1>
        </div>
        <div className="buttons">
          <ButtonA href="/">
            <span>JOIN TELEGRAM</span>
            <Icon name="arrow right" className="button-arrow" />
          </ButtonA>
          <span className="separator" />
          <ButtonA href="/">
            <span>GET EMAIL UPDATE</span>
            <Icon name="arrow right" className="button-arrow" />
          </ButtonA>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
