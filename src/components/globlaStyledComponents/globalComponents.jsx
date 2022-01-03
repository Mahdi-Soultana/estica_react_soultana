import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  ${(p) =>
    p.m
      ? css`
          margin: 0 2rem;
        `
      : css`
          margin: 2rem 0 4rem;
        `}
  ${(p) => p.theme.paragraph}
`;
