import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { Container } from "./../src/style";
import { ThemeProvider } from "styled-components";
import { theme } from "./../src/services/Theme";

addDecorator(story => (
  <div style={{ margin: "0 40px" }}>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </div>
));

const req = require.context("../src/components", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
