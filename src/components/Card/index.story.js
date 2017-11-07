import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Card from "./";

storiesOf("Card", module)
  .add("no title", () => <Card />)
  .add("with title", () => <Card title="Title goes here" />);
