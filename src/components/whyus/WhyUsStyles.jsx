import styled from "styled-components";
export const WhyUsStyles = styled.section`
  margin: 4rem auto;
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
      display: flex;
      justify-content: baseline;
      align-items: center;
      flex-direction: column;
      text-align: center;
      position: relative;
      width: 360px;
      min-height: 255px;
      background: ${(p) => p.theme.white};
      box-shadow: -6px 6px 25px rgba(0, 0, 0, 0.15);
      border-radius: 0px 0px 0px 40px;
      p {
        ${(p) => p.theme.paragraph};
        padding: 1rem;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        line-height: 2.5rem;
        /* or 186% */
        @media (max-width: 850px) {
          width: auto;
        }
        letter-spacing: 0.005em;

        /* Light Text */

        color: ${(p) => p.theme.lightText};
      }
    }
  }
`;
export const Icon = styled.span`
  width: 60px;
  height: 60px;
  display: block;
  position: absolute;
  background: url(${(p) => p.url || "/resources/whyusicons/Vector.png"})
      no-repeat center center,
    linear-gradient(${(p) => p.theme.primary}, ${(p) => p.theme.primary});

  top: -3rem;
  z-index: 1;
  left: 3rem;
  border-radius: 0px 0px 0px 15px;
`;

export const H3 = styled.h3`
  ${(p) => p.theme.bigTitle}
  margin-top:4rem;
  text-align: left;
  padding: 1rem 1rem 0rem;
`;
