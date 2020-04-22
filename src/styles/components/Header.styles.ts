import { customMedia } from "../globalStyle";
import { theme } from "../theme";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  padding: 1rem 2rem;
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 300ms ease-in;
  &.hidden {
    transition: all 300ms ease-out;
    transform: translate(0, -100%);
  }

  .header-left {
    display: flex;

    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 5rem;
      img {
        height: 5rem;
      }
    }
    .nav {
      display: flex;
      justify-content: space-between;
      width: 54rem;
      list-style: none;
      ${customMedia.lessThan("mobile")`
        display: none;
      `}
      li {
        cursor: pointer;
      }
    }
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  /*Memo: Burger menu */

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 18px;
  }

  .nav-sidebar {
    list-style: none;
    padding-left: 0;
    li {
      cursor: pointer;
      margin-bottom: 1em;
    }
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${theme.colors.white};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: ${theme.colors.lightBlue};
    transition: all 0.4s ease 0s;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: ${theme.colors.rat};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    margin-top: -2.1em;
  }

  /* General sidebar styles */
  .bm-menu {
    background: ${theme.colors.darkTransparent};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: ${theme.colors.darkTransparent};
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: ${theme.colors.rat};
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
