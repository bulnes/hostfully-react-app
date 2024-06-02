import { BookingProps } from "./BookingProps";

export interface BookingFormProps extends BookingProps {
  formType?: "booking" | "update";
}
