import { customMedia } from "./../globalStyle";
import styled from "styled-components";
import { theme } from "../theme";

export const NewsContainer = styled.div`
  color: ${theme.colors.white};
  .wrapper {
    padding: 14rem 0;
    margin: 0 -24rem;
    ${customMedia.lessThan("desktop")`
       margin: 0 -8rem;
     `}
    ${customMedia.lessThan("laptop")`
       margin: 0 -2rem;
     `}

    .title-mobile {
      width: 100%;
      text-align: center;
      padding-left: 4rem;
      margin-left: -18rem;
      ${customMedia.greaterThan("laptop")`
        display: none;
      `}
      ${customMedia.lessThan("mobile")`
        margin-top: 5rem;
        margin-left: 0;
      `}
      ${customMedia.lessThan("mobileSecondary")`
        margin-left: -10rem;
      `}
    }

    .news {
      display: grid;
      grid-template-columns: auto auto;
      justify-items: center;
      grid-column-gap: 2rem;
      grid-row-gap: 5rem;
      text-align: center;
      ${customMedia.lessThan("laptop")`
        grid-template-columns: auto;
        grid-row-gap: 10rem;
      `}
      .title {
        margin-left: -30rem !important;
        ${customMedia.lessThan("laptop")`
          display: none;
        `}
      }
      .article {
        background-color: ${theme.colors.black};
        position: relative;
        width: 50rem;
        height: 24rem;
        padding: 2rem 2rem 4rem 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        ${customMedia.lessThan("mobile")`
          width: 100%;
          height: 28rem;
        `}
        .title-link {
          font-size: 3.2rem;
          font-weight: bold;
          line-height: 150%;
          color: ${theme.colors.white};
          text-align: justify;
          text-justify: inter-word;
          ${customMedia.lessThan("mobile")`
            font-size: 2.8rem;
          `}
        }
        .published-date {
          text-align: start;
          font-size: 1.6rem;
          position: absolute;
          bottom: 2rem;
        }
      }
    }
  }
`;
