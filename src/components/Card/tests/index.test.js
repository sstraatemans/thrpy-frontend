import React from "react";
import Card from "./../";

describe("<Card />", () => {
  it("render component <Card>", () => {
    let wrapper = mount(<Card title="title goes here" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
