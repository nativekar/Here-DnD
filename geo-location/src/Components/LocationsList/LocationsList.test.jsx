import React from "react";
import Enzyme, { shallow } from "enzyme";
import LocationsList from "./LocationsList";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Location List", () => {
  const componentProps = [
    {
      name: "John Doe",
      address: "Berlin",
    },
  ];
  it("should render when props are passed", () => {
    const wrapper = shallow(<LocationsList {...componentProps} />);
    expect(wrapper.exists()).toBe(true);
  });
});
