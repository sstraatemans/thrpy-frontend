import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Background from "./";

storiesOf("Background", module).add("complete", () => <Background />);
