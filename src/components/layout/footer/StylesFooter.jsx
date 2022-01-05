import styled from "styled-components";
export const FooterStyles = styled.footer`
  margin-top: 15rem;
  background-color: ${(p) => p.theme.primary};
  padding: 4rem 1rem;
  .social {
    display: flex;
    align-items: center;
    li {
      padding: 0 1rem;
    }
  }
  div {
    padding: 2rem;
  }
  div > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min-content, 230px));
    gap: 6rem;
    ul li:first-child {
      ${(p) => p.theme.bigTitle}
      color:   ${(p) => p.theme.white};
      font-weight: 800;
      font-size: 16px;
      line-height: 21px;
    }
    li {
      ${(p) => p.theme.paragraph}
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      /* or 114% */
      padding: 1rem 0;
      letter-spacing: 0.005em;
      color: ${(p) => p.theme.white};
    }
  }
`;
