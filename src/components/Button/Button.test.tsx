import { render } from "@testing-library/react";
import { Button } from "./Button.component";

describe("Component: Button", () => {
  it("should be defined", () => {
    expect(Button).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<Button>Click me!</Button>);
    expect(wrapper).toBeDefined();
  });

  it("should render children correctly", () => {
    const wrapper = render(<Button>Click me!</Button>);
    expect(wrapper.getByText("Click me!")).toBeDefined();
  });

  it("should render primary button correctly", () => {
    const wrapper = render(<Button buttonType="primary">Click me!</Button>);
    expect(wrapper.getByText("Click me!")).toMatchSnapshot();
  });

  it("should render secondary button correctly", () => {
    const wrapper = render(<Button buttonType="secondary">Click me!</Button>);
    expect(wrapper.getByText("Click me!")).toMatchSnapshot();
  });

  it("should render danger button correctly", () => {
    const wrapper = render(<Button buttonType="danger">Click me!</Button>);
    expect(wrapper.getByText("Click me!")).toMatchSnapshot();
  });
});
