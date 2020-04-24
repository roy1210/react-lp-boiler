import { customMedia } from "./globalStyle";
import { theme } from "./theme";
import styled from "styled-components";

export const CustomButton = styled.div`
  position: relative;
  width: 19rem;
  height: 4.5rem;
  border-radius: 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  display: grid;
  align-items: center;
  ${customMedia.lessThan("mobile")`
    width: 14.5rem;
    font-size: 0.8rem;
    align-self:center;
  `}

  ${(props: { color?: string }): string =>
    props.color === "inverted"
      ? `
             background-color:${theme.colors.black};
             color: ${theme.colors.white};
             cursor: default;
             :hover {
                color: ${theme.colors.white};
             }
             `
      : `
             background-color:${theme.colors.white};
             color: ${theme.colors.black};
             cursor: pointer;
               :hover {
                color: ${theme.colors.black};
                background-color: ${theme.colors.lightBlue};
                transition: all 0.4s ease 0s;
                }
             `};

  ${customMedia.lessThan("mobile")`
    font-size: 1rem;
  `}
  .button-arrow {
    position: absolute;
    right: 3rem;
    top: 1.2rem;
    font-weight: bold;
    ${customMedia.lessThan("mobile")`
      top: 1.9rem;
      right: 2rem;
    `}
  }
  span {
    margin-right: 1.8rem;
  }
`;

export const ButtonA = styled.a`
  position: relative;
  width: 19rem;
  height: 4.5rem;
  border-radius: 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  display: grid;
  align-items: center;
  outline: none;
  border: 0;
  ${customMedia.lessThan("mobile")`
    width: 14.5rem;
    font-size: 0.8rem;
  `}

  ${(props: { color?: string }): string =>
    props.color === "inverted"
      ? `
             background-color:${theme.colors.black};
             color: ${theme.colors.white};
             cursor: default;
             :hover {
                color: ${theme.colors.white};
             }
             `
      : `
             background-color:${theme.colors.white};
             color: ${theme.colors.black};
             cursor: pointer;
               :hover {
                color: ${theme.colors.black};
                background-color: ${theme.colors.lightBlue};
                transition: all 0.4s ease 0s;
                outline: none;
                }
             `};

  ${customMedia.lessThan("mobile")`
    font-size: 1rem;
  `}
  .button-arrow {
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
    font-weight: bold;
    ${customMedia.lessThan("mobile")`
      top: 1.1rem;
      right: 1rem;
    `}
  }
  span {
    margin-right: 1.8rem;
  }
`;
