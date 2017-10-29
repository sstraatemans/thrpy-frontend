import React from "react";

import { storiesOf } from "@storybook/react";
import { specs, describe, it } from "storybook-addon-specifications";
import { mount } from "enzyme";
import expect from "chai";
import { action } from "@storybook/addon-actions";
import Button from "./";

const stories = storiesOf("Form/Button", module);

stories.add("Hello World", function() {
  const story = <Button>Hello World</Button>;

  // specs(() =>
  //   describe("Hello World", function() {
  //     it("Should have the Hello World label", function() {
  //       let output = mount(story);
  //       console.log(output);
  //       expect(output.text()).toContain("Hello World");
  //     });
  //   })
  // );

  return story;
});

stories.add("isloading", () => <Button isLoading="true">Loader</Button>);
