import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { UnWrapped } from "./../";

describe("<TextInput />", () => {
  it("render component <TextInput>", () => {
    const wrapper = mount(<UnWrapped />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
