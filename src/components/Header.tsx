import React from "react";
import { NavbarContainer } from "../styles/components/Header.styles";
import headerLogo from "../resources/header-logo.png";
import { elastic as Menu } from "react-burger-menu";
import { animateScroll as scroll } from "react-scroll";
import { animationFrameScheduler, fromEvent, of, Observable } from "rxjs";
import { useObservable } from "rxjs-hooks";
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  switchMap,
  throttleTime,
} from "rxjs/operators";

const Header = (): JSX.Element => {
  const watchScroll = (): Observable<"Up" | "Down"> =>
    of(typeof window === "undefined").pipe(
      filter((bool) => !bool),
      switchMap(() => fromEvent(window, "scroll", { passive: true })),
      throttleTime(0, animationFrameScheduler),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]) => (y2 < y1 ? "Up" : "Down")),
      distinctUntilChanged()
    );

  const scrollDirection = useObservable(watchScroll, "Up");

  return (
    <NavbarContainer className={`${scrollDirection === "Down" && "hidden"}`}>
      <div className="header-left">
        <div className="logo">
          <img
            src={headerLogo}
            alt="header-logo"
            onClick={(): void => scroll.scrollToTop()}
          />
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
          htmlClassName={"my-class"}
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
