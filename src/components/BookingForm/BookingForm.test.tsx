import { render } from "@testing-library/react";
import { BookingFormProps } from "../../@types/BookingFormProps";
import { BookingForm } from "./BookingForm.component";

const props = {
  title: "Title",
  description: "Description",
  pricePerNight: 100,
  maxGuests: 4,
  bedrooms: 2,
  bathrooms: 2,
  image: "https://via.placeholder.com/478x319",
} as BookingFormProps;

describe("Component: BookingForm", () => {
  it("should be defined", () => {
    expect(BookingForm).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<BookingForm {...props} />);
    expect(wrapper).toBeDefined();
  });
});
