import styled from "styled-components";
import src from "./partnerBg.png";
export const PartnerStyles = styled.section`
  padding: 2rem 1rem;
  position: relative;
  section {
    padding: 3rem 1rem 7rem;
  }
  background: url(${src}) no-repeat center center/cover;
  #pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  h2 {
    ${(p) => p.theme.bigTitle}
  }
  p {
    width: 600px;
  }
  .partner_logo {
    display: grid;
    place-content: center;
    place-items: center;
    div {
      padding: 1rem;
      border: 0.6px solid #3333331f;
      border-top-color: transparent;
      &:first-child {
        border-left-color: transparent;
      }
      &:last-child {
        border-right-color: transparent;
      }
    }
    grid-template: max-content/repeat(auto-fit, minmax(min-content, 180px));
  }

  ///hoouses
`;

export const Houses = styled.section`
  .houses {
    display: grid;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;

    grid-template-columns: repeat(4, minmax(160px, 280px));
    /* > div {
      background-color: #ffffff;
    } */
    p {
      text-align: left;
      width: auto;
      padding-left: 1rem;
      margin-left: 0rem;
      &.price {
        margin: 2rem 0;
        color: ${(p) => p.theme.primary};
        span {
          text-decoration-line: line-through;
          color: ${(p) => p.theme.lightText};
          display: inline-block;
          margin-left: 0.7rem;
        }
      }
    }
  }
  h3 {
    ${(p) => p.theme.bigTitle}
    padding-left:1rem;
  }
  .imgContainer {
    overflow: hidden;
    width: 100%;
    height: ${(p) => p.imgHeight || "171.19px"};

    border-radius: 0px 0px 0px 40px;
  }
  .underline {
    width: 94%;
    height: 1px;
    background-color: ${(p) => p.theme.lightText};
    opacity: 0.4;
  }
  button {
    margin: 2rem 0;
    display: inline-block;
    width: 160px;
    height: 50px;
  }
`;
