import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import VoucherForm from "./../";

xdescribe("<VoucherForm />", () => {
  it("render component <VoucherForm>", () => {
    const wrapper = mount(<VoucherForm />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
