import { HouseProps } from "./HouseProps";

export interface BookingProps extends HouseProps {
  checkInDate?: string;
  checkOutDate?: string;
}