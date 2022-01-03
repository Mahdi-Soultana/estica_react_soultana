import React from "react";
import { HeaderStyles } from "./HeaderStyles";
import { Paragraph } from "../../globlaStyledComponents/globalComponents";

function Header({ children }) {
  return (
    <HeaderStyles>
      {children}
      <div className="mainContainer">
        <article>
          {" "}
          <h1>
            The better way
            <br /> to buy real estate.
          </h1>
          <Paragraph weight="500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its versions have
            evolved over layout.{" "}
          </Paragraph>
          <form>
            <div>
              <input type="text" />
              <button type="submit" className="btn">
                Search
              </button>
            </div>
          </form>
        </article>
        <article>
          <div className="imgContainer">
            <img src="/resources/home2.jpg" alt="placeholder" />
          </div>
        </article>
      </div>
    </HeaderStyles>
  );
}

export default Header;
