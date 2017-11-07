import React from "react";
import { shallow } from "enzyme";
import { CardContainer, CardContent, CardTitle } from "./../style";

describe("<CardContainer />", () => {
  it("should render an <CardContainer> tag", () => {
    const wrapper = shallow(<CardContainer />);
    expect(wrapper.type()).toEqual("div");
  });
});

describe("<CardContent />", () => {
  it("should render an <CardContent> tag", () => {
    const wrapper = shallow(<CardContent />);
    expect(wrapper.type()).toEqual("div");
  });
});

describe("<CardTitle />", () => {
  it("should render an <CardTitle> tag", () => {
    const wrapper = shallow(<CardTitle />);
    expect(wrapper.type()).toEqual("h4");
  });
});
