import { theme } from "./../theme";
import styled from "styled-components";
import { customMedia } from "../globalStyle";
export const EmailSubscriptionContainer = styled.div`
  color: ${theme.colors.white};

  .wrapper {
    background-color: ${theme.colors.darkTransparent};
    margin: 0 -24rem;
    ${customMedia.lessThan("desktop")`
       margin: 0 -8rem;
     `}
    ${customMedia.lessThan("laptop")`
       margin: 0 -2rem;
     `}
    .bar {
      display: flex;
      justify-content: center;
      img {
        margin-top: -0.4rem;
        ${customMedia.lessThan("smallLaptop")`
            width: 100%;
        `}
      }
    }
    .container {
      display: flex;
      justify-content: center;
      padding: 11rem 25rem;
      ${customMedia.lessThan("mobile")`
          display: grid;
          grid-template-rows: 1fr;
          text-align: center;
          padding: 4rem;
      `}
      .left {
        width: 36rem;
        .title {
          h1 {
            font-weight: bold;
            font-size: 8rem;
            line-height: 160%;
          }
        }
      }

      .right {
        max-width: 56rem;
        ${customMedia.lessThan("mobile")`
            display:flex;
            flex-direction: column;
            justify-content:center;
          `}
        .address-input {
          padding-top: 11rem;
          margin-bottom: 4rem;
          width: 54rem;
          ${customMedia.lessThan("smallLaptop")`
          width: 30rem;
          `}
          ${customMedia.lessThan("mobile")`
            padding-top: 6rem;
            align-self:center;
          `}
          input {
            color: ${theme.colors.white};
            background: ${theme.colors.lightGrey};
            border: 1px solid ${theme.secondaryColors.lightGrey10};
            box-sizing: border-box;
          }
        }
      }
    }

    ${customMedia.lessThan("desktop")`
       margin: 0 -8rem;
     `}
    ${customMedia.lessThan("laptop")`
       margin: 0 -2rem;
     `}
  }
`;
