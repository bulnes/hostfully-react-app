import { HouseProps } from "./HouseProps";

export interface BookingsContextType {
  showBookings: boolean;
  setShowBookingsVisibility: (showBookings: boolean) => void;
  bookings: HouseProps[];
  addBooking: (booking: HouseProps) => void;
}
