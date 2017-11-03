// @flow
import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./style";
import VoucherForm from "./components/VoucherForm";
import Scanner from "./components/Scanner";
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
console.log(messages);

const App = () => (
  <ThemeProvider theme={theme}>
    <IntlProvider locale="en" messages={messages}>
      <Container>
        <header>
          <Link to="/">Home</Link>
          <Link to="/scanner">Scanner</Link>
        </header>
        <Route exact path="/" component={VoucherForm} />
        <Route exact path="/scanner" component={Scanner} />
      </Container>
    </IntlProvider>
  </ThemeProvider>
);

export default App;
