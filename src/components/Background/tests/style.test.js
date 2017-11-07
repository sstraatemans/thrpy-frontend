import React from "react";
import { shallow } from "enzyme";
import { BackgroundWrapper } from "./../style";

describe("<BackgroundWrapper />", () => {
  it("should render an <BackgroundWrapper> tag", () => {
    const wrapper = shallow(<BackgroundWrapper />);
    expect(wrapper.type()).toEqual("div");
  });
});
