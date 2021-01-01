import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("File Upload", () => {
  const elementMock = { addEventListener: jest.fn() };
  it("should add event listener on component mount", () => {
    jest
      .spyOn(document, "getElementById")
      .mockImplementation(() => elementMock);
  });
});
