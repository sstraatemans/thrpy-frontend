import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StyledCheckBox from "./";

storiesOf("Form/CheckBox", module).add("with text", () => (
  <div>
    <StyledCheckBox>Label here</StyledCheckBox>
    <StyledCheckBox value="true">Label here</StyledCheckBox>
  </div>
));
