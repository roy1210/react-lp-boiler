import { customMedia } from "./../globalStyle";
import { theme } from "./../theme";
import styled from "styled-components";

export const ProductsContainer = styled.div`
  color: ${theme.colors.white};

  .wrapper {
    margin-top: 24rem;
    h4 {
      font-size: 1.6rem;
      margin-bottom: 6rem;
    }
    .product {
      display: grid;
      grid-template-columns: 56rem auto;
      ${customMedia.lessThan("laptop")`
         grid-template-columns: 30em auto;
      `}
      ${customMedia.lessThan("smallLaptop")`
        grid-template-rows: auto;
        grid-template-columns: none;
      `}
      margin-bottom: 10rem;
      .title {
        font-weight: bold;
        font-size: 7rem;
        ${customMedia.lessThan("mobile")`
           font-size: 5rem;
        `}
      }
      .contents {
        margin-top: 4rem;
        .description {
          font-size: 2rem;
          margin-bottom: 3rem;
        }
        .introduction {
          margin-bottom: 4rem;
          .line-separator {
            margin-bottom: 3rem;
          }
        }
        .buttons {
          display: flex;
          ${customMedia.lessThan("smallLaptop")`
            justify-content: center;
          `}
          .separator {
            margin: 0 1.5rem;
            ${customMedia.lessThan("mobile")`
            margin: 0 0.3rem;
          `}
          }
        }
      }
    }
  }
`;
