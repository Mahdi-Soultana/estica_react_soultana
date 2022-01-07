import styled from "styled-components";
export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;

  z-index: 10;
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

    @media (max-width: 850px) {
      ul {
        display: none;
      }
    }
  }
`;
