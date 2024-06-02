import { render } from "@testing-library/react";
import { Drawer } from "./Drawer.component";

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

describe("Component: Drawer", () => {
  it("should be defined", () => {
    expect(Drawer).toBeDefined();
  });

  it("should render correctly", () => {
    const wrapper = render(<Drawer />);
    expect(wrapper).toBeDefined();
  });

  it("should render bookings correctly", () => {
    const wrapper = render(<Drawer />);
    expect(wrapper.getByText("Bookings")).toBeDefined();
  });

  it("should render close button correctly", () => {
    const wrapper = render(<Drawer />);
    expect(wrapper.getByText("Close menu")).toBeDefined();
  });

  it("should render booking title correctly", () => {
    const wrapper = render(<Drawer />);
    expect(wrapper.getByText("Sample booking")).toBeDefined();
  });

  it("should trigger setShowBookingsVisibility on close button click", () => {
    const wrapper = render(<Drawer />);
    wrapper.getByText("Close menu").click();
    expect(setShowBookingsVisibility).toHaveBeenCalled();
  });

  it("should be represented by the snapshot", () => {
    const { container } = render(<Drawer />);
    expect(container).toMatchSnapshot();
  });
});
