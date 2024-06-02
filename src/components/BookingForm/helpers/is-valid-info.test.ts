import { BookingProps } from "../../../@types/BookingProps";
import { isValidInfo } from "./is-valid-info";

describe("isValidInfo", () => {
  it("should be defined", () => {
    expect(isValidInfo).toBeDefined();
  });

  it("should return false if check-in date is empty", () => {
    const result = isValidInfo({
      checkin: "",
      checkout: "2022-12-31",
      bookings: [],
    });

    expect(result).toBe(false);
  });

  it("should return false if check-out date is empty", () => {
    const result = isValidInfo({
      checkin: "2022-01-01",
      checkout: "",
      bookings: [],
    });

    expect(result).toBe(false);
  });

  it("should return false if check-in date is after check-out date", () => {
    const result = isValidInfo({
      checkin: "2022-12-31",
      checkout: "2022-01-01",
      bookings: [],
    });

    expect(result).toBe(false);
  });

  it("should return false if check-in date is in the past", () => {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getFullYear() - 1, 0, 1).toISOString().split("T")[0];

    const result = isValidInfo({
      checkin: pastDate,
      checkout: "2022-12-31",
      bookings: [],
    });

    expect(result).toBe(false);
  });

  it("should return false if check-out date is in the past", () => {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getFullYear() - 1, 0, 1).toISOString().split("T")[0];

    const result = isValidInfo({
      checkin: "2022-01-01",
      checkout: pastDate,
      bookings: [],
    });

    expect(result).toBe(false);
  });

  it("should return false if there is an overlapping booking", () => {
    const bookings = [
      {
        id: 1,
        checkInDate: "2022-01-01",
        checkOutDate: "2022-01-05",
      },
      {
        id: 2,
        checkInDate: "2022-01-06",
        checkOutDate: "2022-01-10",
      },
    ] as BookingProps[];

    const result = isValidInfo({
      checkin: "2022-01-04",
      checkout: "2022-01-08",
      bookings,
    });

    expect(result).toBe(false);
  });

  it("should return false if checkout is less than current date", () => {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getFullYear() - 1, 0, 1).toISOString().split("T")[0];

    const result = isValidInfo({
      checkin: "2022-01-01",
      checkout: pastDate,
      bookings: [],
    });

    expect(result).toBe(false);
  });
});
