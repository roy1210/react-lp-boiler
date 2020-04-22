import { customMedia } from "./../globalStyle";
import { theme } from "./../theme";
import styled from "styled-components";
export const RoadmapContainer = styled.div`
  color: ${theme.colors.white};

  .wrapper {
    margin-top: 12rem;

    .partners {
      margin-bottom: 6rem;
      .partner-logo {
        width: 16rem;
        padding: 3rem 0;
      }
    }
    .roadmap {
      h4 {
        ${customMedia.lessThan("mobile")`
          margin-bottom: 12rem;
        `}
      }
      .row {
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-items: center;
        ${customMedia.lessThan("mobile")`
          grid-template-columns: 1fr;
          text-align: center;
        `}
        .schedule {
          margin-bottom: 8rem;
          ${customMedia.lessThan("mobile")`
              margin-bottom: 12rem;
          `}
          .circle-mobile {
            ${customMedia.greaterThan("mobile")`
            display: none;
            `}
            .rectangle {
              text-align: center;
              margin-bottom: -1rem;
              margin-left: -0.3rem;
            }
          }
          .month {
            font-size: 1.2rem;
            .circle {
              font-size: 1.7rem;
              margin: 0 0.5rem;
              ${customMedia.lessThan("mobile")`
                display: none;
              `}
            }
          }

          .title {
            font-size: 4.8rem;
            font-weight: bold;
            ${customMedia.lessThan("smallLaptop")`
              font-size: 3rem;
            `}
          }
          .title,
          .description {
            padding: 0 4rem;
          }
        }
        .left {
          width: 100%;
          .title,
          .description,
          .month {
            display: flex;
            flex-direction: row-reverse;
            text-align: right;
            margin-right: -1.5rem;
            ${customMedia.lessThan("mobile")`
                   flex-direction: column;
                   text-align: center;
                   margin-right: 0;
            `}
          }
        }
        .right {
          width: 100%;
          .title,
          .description,
          .month {
            display: flex;
            flex-direction: row;
            text-align: left;
            margin-left: -1.5rem;
            ${customMedia.lessThan("mobile")`
              flex-direction: column;
              text-align: center;
              margin-left: 0;
            `}
          }
        }
      }
    }
  }
`;
