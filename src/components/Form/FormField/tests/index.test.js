import React from "react";
import ReactDOM from "react-dom";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import FormField from "./../";

configure({ adapter: new Adapter() });
let props;

describe("FormField", () => {
  beforeAll(() => {
    props = {
      name: "firstname",
      label: "firstname",
      type: "text"
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FormField {...props} />, div);
  });
});
