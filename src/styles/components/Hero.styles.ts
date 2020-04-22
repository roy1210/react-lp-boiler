import { customMedia } from "./../globalStyle";
import { theme } from "../theme";
import styled from "styled-components";

export const HeroContainer = styled.div`
  color: ${theme.colors.white};
  .wrapper {
    margin-top: 5rem;
    padding: 8rem 0;
    display: grid;
    grid-template-rows: 2fr;
    grid-row-gap: 8rem;
    ${customMedia.greaterThan("desktop")`
        margin-left:-18rem;
        margin-right:-18rem;
      `}

    .announcement {
      width: 60rem;
      height: 9rem;
      padding: 0 2rem;
      background-color: ${theme.colors.darkTransparent};
      ${customMedia.greaterThan("mobile")`
      display: flex;
      justify-content: space-around;
      `}
      ${customMedia.lessThan("mobile")`
        width: 100%;
        display: grid;
        align-content: center;
      `}
      p {
        margin-bottom: 0;
        ${customMedia.lessThan("mobile")`
          font-size: 1.2rem;
          align-items:center;
        `}
      }
      .top {
        font-weight: bold;
        display: flex;
        img {
          margin-left: 1.5rem;
        }
      }
      .contents {
        display: flex;
        justify-content: space-between;
        ${customMedia.lessThan("mobile")`
          margin-top: 1rem;
        `}
        .arrow {
          margin-left: 5rem;
          font-size: 2rem;
          ${customMedia.lessThan("mobile")`
            margin-left: 1rem;
            font-size: 1.7rem;
          `}
        }
      }
    }
    .title {
      h1 {
        font-size: 4.5rem;
        span {
          color: ${theme.colors.teal};
        }
      }
    }
    .buttons {
      display: flex;
      ${customMedia.lessThan("mobile")`
        justify-content: center;
      `}
      .separator {
        margin: 0 1.5rem;
      }
    }
  }
`;
