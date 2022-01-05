import React from "react";

import styled from "styled-components";
export const DividerStyled = styled.section`
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(p) => p.theme.black};
  h3 {
    ${(p) => p.theme.paragraph}
    color: ${(p) => p.theme.white};
    a {
      text-decoration: underline 3px solid ${(p) => p.theme.primary};
    }
  }
`;
function Divider() {
  return (
    <DividerStyled>
      <h3>
        Designed By Estica Team{" "}
        <a href="thub.com/Mahdi-Soultana">and developed By @Mahdi Soultana</a>
      </h3>
    </DividerStyled>
  );
}

export default Divider;
