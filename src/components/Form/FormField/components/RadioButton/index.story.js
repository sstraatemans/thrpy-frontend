import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StyledRadioButton from "./";
import RadionButtonGroup from "./../RadioButtonGroup";

storiesOf("Form/RadioButton", module).add("with text", () => (
  <RadionButtonGroup name="test" value="1">
    <StyledRadioButton val="4">Label here</StyledRadioButton>
    <StyledRadioButton val="1">Label2 here</StyledRadioButton>
    <StyledRadioButton val="3">Label3 here</StyledRadioButton>
  </RadionButtonGroup>
));
