import { BookingProps } from "./BookingProps";

export interface BookingsContextType {
  showBookings: boolean;
  setShowBookingsVisibility: (showBookings: boolean) => void;
  bookings: BookingProps[];
  addBooking: (booking: BookingProps) => void;
  removeBooking: (bookingId: number) => void;
  updateBooking: (bookingId: number, updatedBooking: BookingProps) => void;
}
