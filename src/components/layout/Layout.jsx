import React from "react";
import Footer from "./footer/Footer";
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
      <Footer />
    </LayoutStyles>
  );
}

export default Layout;
