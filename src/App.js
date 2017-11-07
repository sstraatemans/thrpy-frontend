// @flow
import React from "react";
import { ThemeProvider } from "styled-components";
import Register from "./scenes/Register";
import TakePhoto from "./components/TakePhoto";
import { theme } from "./services/Theme";
import { Route, Link } from "react-router-dom";
import { Grid } from "react-styled-flexboxgrid";

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
      <Grid>
        <Route exact path="/" component={Register} />
        <Route exact path="/scanner" component={TakePhoto} />
      </Grid>
    </IntlProvider>
  </ThemeProvider>
);

export default App;
