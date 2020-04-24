import React from "react";
import { RoadmapContainer } from "../styles/components/Roadmap.styles";
import partnerLogo from "../resources/blockchain-alliance-logo-white.png";
import { Icon } from "semantic-ui-react";
import mobileRectangle from "../resources/mobile-rectangle.svg";
import rectangle from "../resources/long-rectangle.svg";
import { Timeline } from "../types/types";
import { Timelines } from "../data/timelines";

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
          <div className="rectangle-container">
            <img src={rectangle} alt="rectangle" className="long-rectangle" />
          </div>

          {Timelines.map((timeline: Timeline, i: number) => (
            <div className="row" key={timeline.title}>
              {i % 2 !== 0 && <div />}
              <div
                className={`${
                  i % 2 === 0 ? "schedule left" : "schedule right"
                }`}
              >
                <div className="circle-small-laptop">
                  <img
                    src={mobileRectangle}
                    alt="rectangle"
                    className="rectangle"
                  />
                  <br />
                  <Icon name="circle" />
                </div>
                <h3 className="month">
                  <Icon name="circle" className="circle" />
                  {timeline.month}
                </h3>
                <h1 className="title">{timeline.title}</h1>
                <p className="description">{timeline.description}</p>
              </div>
              {i % 2 === 0 && <div />}
            </div>
          ))}
        </div>
      </div>
    </RoadmapContainer>
  );
};

export default Roadmap;
