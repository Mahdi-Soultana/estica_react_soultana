import styled from "styled-components";
import bgHeder from "./bgHeder.png";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)`
  background: url(${bgHeder}) no-repeat center center/cover;
  @media (max-width: 950px) {
    padding: 2rem;
  }

  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  > div {
    display: grid;
    grid-template: max-content / repeat(2, 1fr);
    place-items: center;
    place-content: center;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 2rem;
    article:first-child {
      width: 80%;
    }
    @media (max-width: 700px) {
      grid-template: max-content / repeat(1, 1fr);
      article:last-child {
        padding-top: 7rem;
      }
      article:first-child {
        order: 2;
        padding: 2rem;
        form,
        div {
          padding: 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          width: 100%;
        }
      }
    }
    article {
      form {
        div {
          justify-content: space-between;
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
            padding: 0.25rem 0.25rem 0.25rem 3rem;
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
    width: 400px;
    height: 510px;
    @media (max-width: 700px) {
      width: auto;
    }
    overflow: hidden;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 0px 0px 0px 5em;
  }
  h1 {
    ${(p) => p.theme.bigText}
    font-size: 5rem;
    @media (max-width: 700px) {
      font-size: 4rem;
      line-height: 40px;
      width: 100%;
    }
  }
`;
