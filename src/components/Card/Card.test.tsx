import { render } from "@testing-library/react";
import { Card } from "./Card.component";

describe("Component: Card", () => {
  const mockHouseProps = {
    id: 0,
    title: "Sample Title",
    description: "Sample Description",
    pricePerNight: 100,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image: "sample-image.jpg",
  };

  it("should be defined", () => {
    expect(Card).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<Card {...mockHouseProps} />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
