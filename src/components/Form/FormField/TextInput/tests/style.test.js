import React from "react";
import { shallow } from "enzyme";
import { Input, InputFieldBar } from "./../style";

describe("<Input />", () => {
  it("should render an <input> tag", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.type()).toEqual("input");
  });
});

describe("<InputFieldBar />", () => {
  it("should render an <InputFieldBar> tag", () => {
    const wrapper = shallow(<InputFieldBar />);
    expect(wrapper.type()).toEqual("span");
  });
});
