import styled from "styled-components";
import bgHeder from "./bgHeder.png";
export const HeaderStyles = styled.header`
  background: url(${bgHeder}) no-repeat center center/cover;

  height: 90vh;
  width: 100%;
  > div {
    display: grid;
    grid-template: 1fr / repeat(2, 1fr);
    place-items: center;
    place-content: center;
    height: 100%;
    gap: 2rem;
    @media (max-width: 700px) {
      margin-top: 27rem;
      grid-template: 1fr / repeat(1, 1fr);
    }
    article {
      form {
        div {
          display: flex;
          justif-content: center;
          align-items: center;
          display: grid;
          grid-template-columns: minmax(max-content, 1fr) max-content;

          margin-right: 3rem;
          input {
            /* White */

            background: ${(p) => p.theme.white};
            /* Primary */

            border: 3px solid ${(p) => p.theme.primary};
            box-sizing: border-box;
            border-radius: 0px 0px 0px 30px;
            padding: 0.3rem 0.3rem 0.3rem 3rem;
            font-size: 2.25rem;
            font-family: inherit;
          }
          button {
            border: ${(p) => p.theme.primary} 3px solid;
          }
        }
      }
    }
  }

  .imgContainer {
    width: 350px;
    height: 450px;
    overflow: hidden;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 0px 0px 0px 5em;
  }
  h1 {
    ${(p) => p.theme.bigText}
  }
`;
