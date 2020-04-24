import { customMedia } from "./../globalStyle";
import { theme } from "./../theme";
import styled from "styled-components";

export const RoadmapContainer = styled.div`
  color: ${theme.colors.white};

  .wrapper {
    margin: 0 auto;
    margin-top: 12rem;
    max-width: 1100px !important;
    padding: auto;

    .partners {
      margin-bottom: 12rem;
      .partner-logo {
        width: 16rem;
      }
    }
    .roadmap {
      h4 {
        margin-bottom: 12rem;
      }
      .rectangle-container {
        margin-bottom: 20rem;
        text-align: center;
        ${customMedia.lessThan("smallLaptop")`
          display: none;
        `}
        .long-rectangle {
          position: absolute;
          height: 180rem;
        }
      }
      .row {
        width: 100%;
        height: 28rem;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-items: center;
        ${customMedia.lessThan("smallLaptop")`
          grid-template-columns: 1fr;
          text-align: center;
        `}
        .schedule {
          margin-bottom: 8rem;
          ${customMedia.lessThan("smallLaptop")`
              margin-bottom: 12rem;
          `}
          .circle-small-laptop {
            ${customMedia.greaterThan("smallLaptop")`
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
              ${customMedia.lessThan("smallLaptop")`
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
            ${customMedia.lessThan("smallLaptop")`
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
            ${customMedia.lessThan("smallLaptop")`
              flex-direction: column;
              text-align: center;
              margin-left: 0;
            `}
          }
        }
        .description {
          ${customMedia.lessThan("smallLaptop")`
              text-align: justify !important;;
              text-justify: inter-word;
          `}
        }
      }
    }
  }
`;
