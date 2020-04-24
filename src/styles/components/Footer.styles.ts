import { customMedia } from "./../globalStyle";
import { theme } from "./../theme";
import styled from "styled-components";

export const FooterContainer = styled.div`
  .wrapper {
    margin-top: auto;
    background-color: ${theme.colors.footerTransparent};
    grid-template-columns: 1fr;
    display: grid;
    padding-top: 3rem;
    padding-right: 8rem;
    padding-left: 8rem;
    color: ${theme.colors.white};

    ${customMedia.greaterThan("mobile")`
      height: 24rem;
      padding-bottom: 7rem;
    `}
    ${customMedia.lessThan("tablet")`
    padding: 2rem;
    `};
    ${customMedia.lessThan("mobile")`
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
    height: 100%;
    `}
  }
  .wrapper ul {
    display: flex;
    justify-content: space-between;
    width: 55rem;
    list-style: none;
    ${customMedia.greaterThan("mobile")`
      padding: 0;
    `}
    ${customMedia.lessThan("mobile")`
      display: grid;
      width: 33.4rem;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      padding-left: 0px;
      margin: 0px;
    `}
  }
  .wrapper li {
    ${customMedia.lessThan("mobile")`
      justify-items: center;
      justify-self: center;
      line-height: 3rem;
    `}
  }

  .wrapper a {
    font-size: 1.4rem;
    color: ${theme.colors.white};
  }

  .logo {
    display: flex;
    justify-content: space-between;
    ${customMedia.lessThan("mobile")`
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
    `}
    .footer-logo {
      ${customMedia.greaterThan("mobile")`
        align-self: center;
        padding: 3rem 0;
        `}
      ${customMedia.lessThan("mobile")`
        display:flex;
        justify-content:center;
        `}
        footer {
        margin-top: 1rem;
        ${customMedia.lessThan("mobile")`
        display: none;
      `}
      }
      img {
        height: 2.6rem;
        width: 5rem;
        ${customMedia.lessThan("mobile")`
          height: 3rem;
          margin-top: 4rem;
          margin-bottom: 0.6rem;
          text-align: center;
        `}
      }
    }
  }

  .media {
    display: grid;
    grid-template-columns: repeat(4, 3rem);
    align-items: center;
    grid-column-gap: 3rem;
    ${customMedia.greaterThan("mobile")`
      align-self: center;
    `}
    ${customMedia.lessThan("mobile")`
      margin-top: 1.5rem;
      grid-template-columns:repeat(4, 1fr);
      grid-column-gap: 1rem;
      justify-items: center;
    `}
    img {
      height: 2.8rem;
      width: 2.8rem;
      cursor: pointer;
    }
  }

  footer {
    margin-top: 2.4rem;
    font-weight: 300;
    font-size: 1.4rem;
  }
  .footer-mobile {
    ${customMedia.greaterThan("mobile")`
      display: none;
    `}
  }
`;
