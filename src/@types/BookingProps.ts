import { HouseProps } from "./HouseProps";

export interface BookingProps extends HouseProps {
  bookingId: number;
  checkInDate?: string;
  checkOutDate?: string;
}