import React from "react";
import Enzyme, { shallow } from "enzyme";
import Dashboard from "./Dashboard";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Dashboard", () => {
  it("should render in default state", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.exists()).toBe(true);
  });
});
