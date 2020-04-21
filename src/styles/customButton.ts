import { customMedia } from "./globalStyle";
import { theme } from "./theme";
import styled from "styled-components";

export const ButtonA = styled.a`
  position: relative;
  background-color: ${theme.colors.white};
  width: 16em;
  height: 3.6em;
  border-radius: 2em;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${theme.colors.black};
  text-align: center;
  cursor: pointer;
  display: grid;
  align-items: center;
  :hover {
    color: ${theme.colors.black};
    background-color: ${theme.colors.lightBlue};
    transition: all 0.4s ease 0s;
  }
  ${customMedia.lessThan("mobile")`
  font-size: 1rem;
  `}
  .button-arrow {
    position: absolute;
    right: 1.2em;
    top: 0.95em;
    font-weight: bold;
    ${customMedia.lessThan("mobile")`
    top: 0.7em;
    `}
  }
  span {
    margin-right: 1.8em;
  }
`;
