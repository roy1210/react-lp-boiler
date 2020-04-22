import React from "react";
import { RoadmapContainer } from "../styles/components/Roadmap.styles";
import partnerLogo from "../resources/blockchain-alliance-logo-white.png";
import { Icon } from "semantic-ui-react";
import longRectangle from "../resources/long-rectangle.svg";

const Roadmap = (): JSX.Element => {
  return (
    <RoadmapContainer>
      <div className="wrapper">
        <div className="partners Center">
          <p className="Section-title">PARTNERS</p>
          <img src={partnerLogo} alt="partner-logo" className="partner-logo" />
        </div>
        <div className="roadmap">
          <h4 className="Section-title Center">ROAD MAP</h4>
          <div className="row">
            <div className="schedule left">
              <div className="circle-mobile">
                <img
                  src={longRectangle}
                  alt="rectangle"
                  className="rectangle"
                />
                <br />
                <Icon name="circle" />
              </div>
              <h3 className="month">
                <Icon name="circle" className="circle" />
                JAN 2020
              </h3>
              <h1 className="title">Ea Et Ipsum</h1>
              <p className="description">
                Diam stet dolores no sed diam et. Amet diam rebum et lorem stet.
              </p>
            </div>
            <div />
          </div>

          <div className="row">
            <div />
            <div className="schedule right">
              <div className="circle-mobile">
                <img
                  src={longRectangle}
                  alt="rectangle"
                  className="rectangle"
                />
                <br />
                <Icon name="circle" />
              </div>
              <h3 className="month">
                <Icon name="circle" className="circle" />
                FEB 2020
              </h3>
              <h1 className="title">Ea Et Ipsum</h1>
              <p className="description">
                Diam stet dolores no sed diam et. Amet diam rebum et lorem stet.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="schedule left">
              <div className="circle-mobile">
                <img
                  src={longRectangle}
                  alt="rectangle"
                  className="rectangle"
                />
                <br />
                <Icon name="circle" />
              </div>
              <h3 className="month">
                <Icon name="circle" className="circle" />
                JAN 2020
              </h3>
              <h1 className="title">Ea Et Ipsum</h1>
              <p className="description">
                Diam stet dolores no sed diam et. Amet diam rebum et lorem stet.
              </p>
            </div>
            <div />
          </div>

          <div className="row">
            <div />
            <div className="schedule right">
              <div className="circle-mobile">
                <img
                  src={longRectangle}
                  alt="rectangle"
                  className="rectangle"
                />
                <br />
                <Icon name="circle" />
              </div>
              <h3 className="month">
                <Icon name="circle" className="circle" />
                FEB 2020
              </h3>
              <h1 className="title">Ea Et Ipsum</h1>
              <p className="description">
                Diam stet dolores no sed diam et. Amet diam rebum et lorem stet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RoadmapContainer>
  );
};

export default Roadmap;
