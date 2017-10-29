import React from "react";
import { shallow } from "enzyme";
import { CheckBoxWrapper, CheckBox, CheckBoxBox, Label } from "./../style";

xdescribe("<CheckBoxWrapper />", () => {
  it("should render an <div> tag", () => {
    const wrapper = shallow(<CheckBoxWrapper />);
    expect(wrapper.type()).toEqual("div");
  });
});

xdescribe("<CheckBox />", () => {
  it("should render an <input> tag", () => {
    const wrapper = shallow(<CheckBox />);
    expect(wrapper.type()).toEqual("input");
  });
});

xdescribe("<CheckBoxBox />", () => {
  it("should render an <span> tag", () => {
    const wrapper = shallow(<CheckBoxBox />);
    expect(wrapper.type()).toEqual("span");
  });
});

xdescribe("<Label />", () => {
  it("should render an <label> tag", () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.type()).toEqual("label");
  });
});
