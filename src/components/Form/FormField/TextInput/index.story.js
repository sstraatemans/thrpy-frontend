import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TextInput from "./";

storiesOf("Form/TextInput", module).add("with text", () => (
  <div>
    <TextInput label="Text field" />
    <TextInput placeholder="This is the placeholder" label="Text field" />
  </div>
));
