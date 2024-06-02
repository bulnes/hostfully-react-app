import { render } from "@testing-library/react";
import { CardsContainer } from "./CardsContainer.component";

const setShowBookingsVisibility = jest.fn();

// Mocking the useContext hook
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    showBookings: true,
    setShowBookingsVisibility,
    bookings: [
      {
        id: 1,
        title: "Sample booking",
        pricePerNight: 100,
      },
    ],
  }),
}));

describe("Component: CardsContainer", () => {
  it("should be defined", () => {
    expect(CardsContainer).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<CardsContainer />);
    expect(wrapper).toBeDefined();
  });

  it("should render sort by label correctly", () => {
    const wrapper = render(<CardsContainer />);
    expect(wrapper.getByText("Sort by")).toBeDefined();
  });

  it("should render sort by select correctly", () => {
    const wrapper = render(<CardsContainer />);
    expect(wrapper.getByLabelText("Sort by")).toBeDefined();
  });

  it("should render newest option correctly", () => {
    const wrapper = render(<CardsContainer />);
    expect(wrapper.getByText("Newest")).toBeDefined();
  });

  it("should render lowest price option correctly", () => {
    const wrapper = render(<CardsContainer />);
    expect(wrapper.getByText("Lowest price")).toBeDefined();
  });

  it("should render highest price option correctly", () => {
    const wrapper = render(<CardsContainer />);
    expect(wrapper.getByText("Highest price")).toBeDefined();
  });

  it("should be represented by the snapshot", () => {
    const { container } = render(<CardsContainer />);
    expect(container).toMatchSnapshot();
  });
});
