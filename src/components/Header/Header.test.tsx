import { render } from "@testing-library/react";
import { Header } from "./Header.component";

describe("Component: Header", () => {
  it("should be defined", () => {
    expect(Header).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<Header />);
    expect(wrapper).toBeDefined();
  });

  it("should render title correctly", () => {
    const wrapper = render(<Header />);
    expect(wrapper.getByText("Hostfully")).toBeDefined();
  });

  it("should render subtitle correctly", () => {
    const wrapper = render(<Header />);
    expect(wrapper.getByText("Front-end Test")).toBeDefined();
  });

  it("should be represented by the snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
