import styled from "styled-components";
import { motion } from "framer-motion";

export const AgentStyles = styled.section`
  margin-bottom: 5rem;
  width: 100%;
  min-height: 680px;
  @media (max-width: 950px) {
    padding: 2rem;
  }

  @media (max-width: 850px) {
    padding: 2rem;
  }
  background: ${(p) => p.theme.lightBlack};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .social {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0 0 1.7rem;
    a {
      padding: 1rem;
      img {
        width: 160%;
        height: 160%;
      }
    }
  }
`;

export const H3 = styled.h3`
  ${(p) => p.theme.bigTitle};
  color: ${(p) => p.theme.white};
  margin-left: 3rem;
  letter-spacing: 0.005em;
`;
export const H5 = styled.h5`
  ${(p) => p.theme.subParagraph};
  margin-left: 3rem;
`;
export const Agents = styled.article`
  margin-top: 4rem;
  display: grid;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;

  grid-template-columns: repeat(4, minmax(160px, 280px));
  @media (max-width: 850px) {
    grid-template-columns: repeat(3, minmax(160px, 280px));
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, minmax(160px, 280px));
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, minmax(160px, 280px));
  }
  /* > div {
      background-color: #ffffff;
    } */
  p {
    text-align: left;
    width: auto;
    padding-left: 1rem;
    margin-left: 0rem;
    color: ${(p) => p.theme.white};
    @media (max-width: 850px) {
      width: auto;
    }
  }

  .imgContainer {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: ${(p) => p.imgHeight || "231.19px"};
    img {
      position: absolute;
      top: 0;
      left: 0;
    }
    border-radius: 0px 0px 0px 40px;
  }
`;
export const H1 = styled(motion.h1)`
  ${(p) => p.theme.bigTitle};
  color: ${(p) => p.theme.white};
`;
