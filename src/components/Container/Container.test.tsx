import { render } from "@testing-library/react";
import { Container } from "./Container.component";

describe("Component: Container", () => {
  it("should be defined", () => {
    expect(Container).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<Container>Container</Container>);
    expect(wrapper).toBeDefined();
  });

  it("should render children correctly", () => {
    const wrapper = render(<Container>Container</Container>);
    expect(wrapper.getByText("Container")).toBeDefined();
  });
});
