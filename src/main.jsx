import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";
import { GlobaleStyles } from "./GlobaleStyles";
import { Light } from "./themes/Light";
import App from "./App";

const Root = () => (
  <ThemeProvider theme={Light}>
    <App />
    <GlobaleStyles />
  </ThemeProvider>
);
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root"),
);
