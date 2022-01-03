import React from "react";
import Header from "./header/Header";
import { LayoutStyles } from "./LayoutStyles";
import Nav from "./nav/Nav";

function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header>
        <Nav />
      </Header>
      {children}
      <footer>Footer</footer>
    </LayoutStyles>
  );
}

export default Layout;
