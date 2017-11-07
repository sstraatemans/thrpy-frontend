import React from "react";
import Background from "./../";

describe("<Background />", () => {
  it("render component <Background>", () => {
    let wrapper = mount(<Background />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
