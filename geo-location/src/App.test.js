import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render in default state", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
