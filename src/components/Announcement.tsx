import React from "react";
import { AnnouncementContainer } from "../styles/components/Announcement.styles";
import rectangle from "../resources/rectangle.svg";
import { ButtonA } from "../styles/customButton";

const Announcement = (): JSX.Element => {
  return (
    <AnnouncementContainer>
      <div className="wrapper">
        <div className="announcement">
          <p className="top">
            Announcement
            <img src={rectangle} alt="rectangle" className="align-self" />
          </p>
          <h1 className="description">Campaign nonumy kasd tempor.</h1>
          <ButtonA href="/" rel="noopener noreferrer" target="_blank">
            JOIN CAMPAIGN
          </ButtonA>
        </div>
      </div>
    </AnnouncementContainer>
  );
};

export default Announcement;
