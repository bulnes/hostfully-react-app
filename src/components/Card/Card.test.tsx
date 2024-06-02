import { render } from "@testing-library/react";
import { HouseProps } from "../../@types/HouseProps";
import { Card } from "./Card.component";

// Mocking the HouseProps
const props = {
  title: "Title",
  description: "Description",
  pricePerNight: 100,
  maxGuests: 4,
  bedrooms: 2,
  bathrooms: 2,
  image: "https://via.placeholder.com/478x319",
} as HouseProps;

describe("Component: Card", () => {
  it("should be defined", () => {
    expect(Card).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<Card {...props} />);
    expect(wrapper).toBeDefined();
  });

  it("should render title correctly", () => {
    const wrapper = render(<Card {...props} />);
    expect(wrapper.getByText("Title")).toBeDefined();
  });

  it("should render description correctly", () => {
    const wrapper = render(<Card {...props} />);
    expect(wrapper.getByText("Description")).toBeDefined();
  });

  it("should render maxGuests correctly", () => {
    const wrapper = render(<Card {...props} />);
    expect(wrapper.getByText("4 guests")).toBeDefined();
  });

  it("should render bedrooms correctly", () => {
    const wrapper = render(<Card {...props} />);
    expect(wrapper.getByText("2 bedrooms")).toBeDefined();
  });

  it("should render bathrooms correctly", () => {
    const wrapper = render(<Card {...props} />);
    expect(wrapper.getByText("2 baths")).toBeDefined();
  });
});
