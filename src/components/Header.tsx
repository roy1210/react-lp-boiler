import React from "react";
import { NavbarContainer } from "../styles/components/Header.styles";
import headerLogo from "../resources/header-logo.png";
import { elastic as Menu } from "react-burger-menu";

const Header = (): JSX.Element => {
  return (
    <NavbarContainer>
      <div className="header-left">
        <div className="logo">
          <img src={headerLogo} alt="header-logo" />
        </div>
        <ul className="nav">
          <li>PRODUCT</li>
          <li>ABOUT</li>
          <li>NEWS</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="header-right">
        <Menu
          id="elastic"
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
        >
          <ul className="nav-sidebar">
            <li>PRODUCT</li>
            <li>ABOUT</li>
            <li>NEWS</li>
            <li>FAQ</li>
          </ul>
        </Menu>
      </div>
    </NavbarContainer>
  );
};

export default Header;
