import styled from "styled-components";
export const WhyUsStyles = styled.section`
  margin: 5rem auto;
  @media (max-width: 950px) {
    padding: 2rem;
  }
  h1 {
    ${(p) => p.theme.bigTitle}
    color:${(p) => p.theme.black};
  }
  .whyusGrid {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 850px) {
      padding: 2rem;
    }
    flex-wrap: wrap;
    > article {
      margin: 1rem;
      height: 380px;
      width: 340px;
      text-align: center;
      img {
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
        background: #4e4e4e;
        display: inline-block;
        margin: 1rem auto;
        border-radius: 50%;

        width: 130px;
        height: 130px;
      }
      background: #ffffff;
      border-radius: 0px 0px 0px 40px;
      background: ${(p) => p.theme.white};
      box-shadow: -6px 6px 25px rgba(0, 0, 0, 0.15);
      border-radius: 0px 0px 0px 40px;
      p {
        ${(p) => p.theme.paragraph};
        padding: 1rem;
        font-family: Open Sans;
        font-style: italic;
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 2.5rem;
        /* or 186% */

        letter-spacing: 0.005em;

        /* Light Text */

        color: ${(p) => p.theme.lightText};
        @media (max-width: 850px) {
          width: auto;
        }
        margin-top: auto;
      }
    }
  }
`;

export const H3 = styled.h3`
  ${(p) => p.theme.paragraph}
  text-align: left;
  margin: auto;
  margin-top: 1rem;
  padding: 0rem 4rem 1rem;
  line-height: 29px;
  font-style: italic;
  text-align: center;
`;
