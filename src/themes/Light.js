import { css } from "styled-components";
export const Light = {
  darkText: "#0A2233",
  lightBlack: "#262626",
  lightText: "#555555",
  primary: "#FF6E00",
  black: "#000",
  white: "#fff",
  bigText: css`
    font-family: EB Garamond;
    font-style: normal;
    font-weight: ${(p) => p.weight || "bold"};
    font-size: ${(p) => p.size || " 68px"};
    line-height: 70px;
    /* or 117% */

    text-transform: capitalize;

    /* Dark Text */
    color: ${(p) => p.color || p.theme.darkText};
    color: ${(p) => p.theme.darkText};
  `,
  paragraph: css`
    font-family: Open Sans;
    font-style: normal;
    font-weight: ${(p) => p.weight || "normal"};
    font-size: ${(p) => p.size || " 16px"};
    line-height: 28px;
    /* or 175% */

    text-transform: capitalize;

    /* Light Text */

    color: ${(p) => p.theme.lightText};
  `,
  subParagraph: css`
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: ${(p) => p.weight || "normal"};
    font-size: ${(p) => p.size || " 12px"};
    line-height: 14px;
    /* identical to box height */
    color: ${(p) => p.color || p.theme.white};
    letter-spacing: 0.005em;
    text-transform: uppercase;
  `,
  bigTitle: css`
    font-family: EB Garamond;
    font-style: normal;
    font-weight: ${(p) => p.weight || "bold"};
    font-size: ${(p) => p.size || " 38px"};
    line-height: 50px;
    /* identical to box height */
    color: ${(p) => p.color || p.theme.darkText};
    letter-spacing: 0.005em;
  `,
};
