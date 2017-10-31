import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Modal from "./../";

describe("<Modal />", () => {
  it("render component <Modal>", () => {
    const wrapper = mount(<Modal />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
