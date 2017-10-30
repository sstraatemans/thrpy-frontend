import React from "react";

import ReactDOM from "react-dom";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { UnWrapped } from "./../";

let props = "";
describe("<TextInput />", () => {
  beforeAll(() => {
    props = {
      name: "firstname",
      label: "firstname",
      type: "text"
    };
  });

  it("render component <TextInput>", () => {
    let wrapper = mount(<UnWrapped />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the label name", () => {
    let wrapper = mount(<UnWrapped {...props} />);
    let label = wrapper.find("label");
    const text = label.text();
    expect(text).toBe(props.label);
  });
});
