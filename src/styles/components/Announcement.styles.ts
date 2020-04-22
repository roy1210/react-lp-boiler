import { customMedia } from "../globalStyle";
import { theme } from "../theme";
import styled from "styled-components";

export const AnnouncementContainer = styled.div`
  color: ${theme.colors.white};
  background-color: navy;

  .wrapper {
    margin-top: 7rem;
    ${customMedia.lessThan("mobile")`
        margin-left:-2rem;
        margin-right:-2rem;
      `}
    .announcement {
      background-color: ${theme.colors.black};
      padding: 3rem;
      .top {
        font-weight: bold;
        display: flex;
        font-size: 1.2rem;
        img {
          margin-left: 1rem;
          margin-top: -0.2rem;
        }
      }
      .description {
        margin: 5rem 0;
        font-size: 5rem;
      }
    }
  }
`;
