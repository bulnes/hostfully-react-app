import { render } from "@testing-library/react";
import { CardsContainer } from "./CardsContainer.component";

// Mock the BookingsContext
jest.mock("../../@contexts/BookingsContext", () => ({
  BookingsContext: {
    Consumer: (props: any) =>
      props.children({
        showBookings: false,
        setShowBookingsVisibility: jest.fn(),
        bookings: [],
      }),
  },
}));

describe("Component: CardsContainer", () => {
  it("should be defined", () => {
    expect(CardsContainer).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<CardsContainer />);
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
