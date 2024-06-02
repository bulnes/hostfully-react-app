import swal from "sweetalert";
import { BookingProps } from "../../../@types/BookingProps";

interface ValidInfoCheckProps {
  checkin: string;
  checkout: string;
  bookings: BookingProps[];
  id?: number,
  oldCheckInDate?: string,
  oldCheckOutDate?: string
}

export function isValidInfo({
  checkin,
  checkout,
  bookings,
  id = -1,
  oldCheckInDate,
  oldCheckOutDate
}: ValidInfoCheckProps) {
  const swalErrorConfig = {
    icon: "error",
    timer: 3000,
  };

  // Check if the check-in or check-out date is empty
  if (!checkin) {
    swal("Check-in date is empty", "Please select a date", swalErrorConfig);
    return false;
  }

  if (!checkout) {
    swal("Check-out date is empty", "Please select a date", swalErrorConfig);
    return false;
  }

  // Check if the check-in date is before the check-out date
  const [checkinYear, checkinMonth, checkinDay] = checkin.split("-").map(Number);
  const [checkoutYear, checkoutMonth, checkoutDay] = checkout.split("-").map(Number);

  const bookingDate = new Date(checkinYear, checkinMonth, checkinDay);
  const bookingCheckOutDate = new Date(checkoutYear, checkoutMonth, checkoutDay);

  if (bookingDate > bookingCheckOutDate) {
    swal("Invalid date range", "Please select another date", swalErrorConfig);
    return false;
  }

  // Check if the check-in or check-out date is in the past
  const currentDate = new Date();

  if (bookingDate < currentDate) {
    swal("Invalid date", "Please select a future date", swalErrorConfig);
    return false;
  }

  if (bookingCheckOutDate < currentDate) {
    swal("Invalid date", "Please select a future date", swalErrorConfig);
    return false;
  }

  // Check if there are any bookings that overlap with the new booking
  const bookingIndex = bookings.findIndex((b) => b.id === id && b.checkInDate === oldCheckInDate && b.checkOutDate === oldCheckOutDate);
  const overlappingBooking = id >= 0 ? bookings.find(
    (b, index) =>
      bookingIndex !== index &&
      new Date(b.checkInDate || "") < new Date(checkout) &&
      new Date(b.checkOutDate || "") > new Date(checkout)
  ) : bookings.find(
    (b) =>
      new Date(b.checkInDate || "") <= new Date(checkout) &&
      new Date(b.checkOutDate || "") >= new Date(checkout)
  );

  if (overlappingBooking) {
    swal("Overlapping booking", "Please select another date range", swalErrorConfig);
    return false;
  }

  return true;
}