// @flow
import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./style";
import Register from "./scenes/Register";
import TakePhoto from "./components/TakePhoto";
import { theme } from "./services/Theme";
import { Route, Link } from "react-router-dom";

import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import nl from "react-intl/locale-data/nl";
import localeData from "./locales/data.json";

addLocaleData([...en, ...nl]);
// Try full locale, try locale without region code, fallback to 'en'
//const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;
const messages = localeData.en;

const App = () => (
  <ThemeProvider theme={theme}>
    <IntlProvider locale="en" messages={messages}>
      <Container>
        <Route exact path="/" component={Register} />
        <Route exact path="/scanner" component={TakePhoto} />
      </Container>
    </IntlProvider>
  </ThemeProvider>
);

export default App;
