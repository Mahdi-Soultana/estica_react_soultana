import styled from "styled-components";
export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-items: center;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      align-content: center;
      justify-items: center;
    }
    li {
      padding: 1.2rem;
    }
    button {
      svg {
        margin-right: 1rem;
      }
    }
    a {
      ${(p) => p.theme.paragraph}
    }
  }
`;
