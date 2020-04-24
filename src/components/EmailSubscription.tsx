import React from "react";
import { EmailSubscriptionContainer } from "../styles/components/EmailSubscription.styles";
import { Input, Icon } from "semantic-ui-react";
import { CustomButton } from "../styles/customButton";
import horizontalBar from "../resources/long-horizontal-bar.svg";

const EmailSubscription = (): JSX.Element => {
  return (
    <EmailSubscriptionContainer>
      <div className="wrapper">
        <div className="bar">
          <img src={horizontalBar} alt="bar" />
        </div>
        <div className="container">
          <div className="left">
            <p className="Section-title">NEWSLETTER</p>
            <div className="title">
              <h1>GET</h1>
              <h1>EMAIL</h1>
              <h1>UPDATE</h1>
            </div>
          </div>
          <div className="right">
            <Input placeholder="you@email.com" className="address-input" />
            <CustomButton>
              <span>SEND</span>
              <Icon name="arrow right" className="button-arrow" />
            </CustomButton>
          </div>
        </div>
      </div>
    </EmailSubscriptionContainer>
  );
};

export default EmailSubscription;
