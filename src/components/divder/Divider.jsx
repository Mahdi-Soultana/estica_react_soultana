import React from "react";

import styled from "styled-components";
export const DividerStyled = styled.section`
  background: linear-gradient(to right, #22222271, transparent),
    url("https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
      no-repeat center center/cover;
  background-attachment: fixed;
  padding: 3rem;
  color: ;
  margin: 6rem 0rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  h3 {
    ${(p) => p.theme.bigTitle}
    color: ${(p) => p.theme.white}
  }
`;
function Divider() {
  return (
    <DividerStyled>
      <h3>Request a Free Consultation!!</h3>
      <button className="btn">reserve a slot</button>
    </DividerStyled>
  );
}

export default Divider;
