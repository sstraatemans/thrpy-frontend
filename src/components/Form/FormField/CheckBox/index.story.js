import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import CheckBox from "./";

storiesOf("Form/CheckBox", module).add("with text", () => (
  <CheckBox label="test" />
));
storiesOf("Form/CheckBox", module).add("with innerlabel", () => (
  <CheckBox>Accept terms</CheckBox>
));
