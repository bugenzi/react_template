import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./Common/Style/theme";
import Button from "./Component/Button";

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Button />
    <h1>React typescript boilerplate</h1>
  </ThemeProvider>
);

export default App;
