import { customMedia } from "./../globalStyle";
import { theme } from "./../theme";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  color: ${theme.colors.white};

  .wrapper {
    margin-top: 15em;
    padding: 0 12em;

    ${customMedia.lessThan("desktop")`
      padding: 0 8em;
    `}
    ${customMedia.lessThan("laptop")`
      padding: 0 2em;
    `}
    ${customMedia.lessThan("smallLaptop")`
      padding: 0
    `}
    h4 {
      font-size: 1.6rem;
      margin-bottom: 3.2em;
          ${customMedia.lessThan("smallLaptop")`
      padding: 0
    `}
    }
    .product {
      display: grid;
      grid-template-columns: 34em auto;
      ${customMedia.lessThan("laptop")`
         grid-template-columns: 30em auto;
      `}
      ${customMedia.lessThan("smallLaptop")`
        grid-template-rows: auto;
        grid-template-columns: none;
      `}
      margin-bottom: 7em;
      .title {
        font-weight: bold;
        font-size: 7rem;
        ${customMedia.lessThan("mobile")`
           font-size: 5rem;
        `}
      }
      .contents {
        margin-top: 2em;
        .description {
          font-size: 2rem;
          margin-bottom: 2em;
        }
        .introduction {
          margin-bottom: 2em;
          .line-separator {
            margin-bottom: 1.5em;
          }
        }
        .buttons {
          display: flex;
          ${customMedia.lessThan("smallLaptop")`
            justify-content: center;
          `}
          .separator {
            margin: 0 1em;
            ${customMedia.lessThan("mobile")`
            margin: 0 0.2em;
          `}
          }
        }
      }
    }
  }
`;
