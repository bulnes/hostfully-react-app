import { useContext, useRef } from "react";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { BookingsContext } from "../../@contexts/BookingsContext";
import { BookingProps } from "../../@types/BookingProps";
import { Button } from "../Button/Button.component";
import { isValidInfo } from "./helpers/is-valid-info";

interface BookingForm extends BookingProps {
  formType?: "booking" | "update";
}

export function BookingForm({
  id,
  title,
  description,
  pricePerNight,
  maxGuests,
  bedrooms,
  bathrooms,
  image,
  checkInDate,
  checkOutDate,
  bookingId,
  formType = "booking",
}: BookingForm) {
  const { addBooking, removeBooking, updateBooking, bookings } =
    useContext(BookingsContext);

  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);

  function handleBookNow(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const bookingId = bookings.length + 1;
    const checkin = checkinRef.current?.value || "";
    const checkout = checkoutRef.current?.value || "";

    const isValid = isValidInfo({ checkin, checkout, bookings });

    if (isValid) {
      addBooking({
        id,
        title,
        description,
        pricePerNight,
        maxGuests,
        bedrooms,
        bathrooms,
        image,
        bookingId,
        checkInDate: checkin,
        checkOutDate: checkout,
      });

      toast("Your booking has been added successfully");
    }
  }

  function handleUpdateBooking(
    bookingId: number,
    checkInDate: string,
    checkOutDate: string,
    newCheckInDate: string,
    newCheckOutDate: string
  ) {
    const isValid = isValidInfo({
      checkin: checkInDate,
      checkout: checkOutDate,
      bookings,
      id: bookingId,
      oldCheckInDate: newCheckInDate,
      oldCheckOutDate: newCheckOutDate,
    });

    if (isValid) {
      const updatedBooking = {
        ...bookings.find((booking) => booking.id === bookingId),
        checkInDate: newCheckInDate,
        checkOutDate: newCheckOutDate,
      } as BookingProps;

      updateBooking(bookingId, updatedBooking);

      toast("Your booking has been updated successfully");
    }
  }

  function handleRemoveBooking(bookingId: number) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this booking!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeBooking(bookingId);

        toast("Poof! Your booking has been deleted!");
      }
    });
  }

  return (
    <form onSubmit={handleBookNow}>
      <div className="flex items-center gap-3 mt-3 mb-5">
        <div className="flex items-start flex-col gap-1">
          <label htmlFor="checkin" className="text-gray-600">
            Check-in
          </label>

          <input
            type="date"
            id="checkin"
            className="border rounded-md p-1"
            ref={checkinRef}
            defaultValue={checkInDate}
          />
        </div>

        <div className="flex items-start flex-col gap-1">
          <label htmlFor="checkout" className="text-gray-600">
            Check-out
          </label>

          <input
            type="date"
            id="checkout"
            className="border rounded-md p-1 w-full"
            ref={checkoutRef}
            defaultValue={checkOutDate}
          />
        </div>
      </div>

      {formType === "booking" && <Button type="submit">Book now</Button>}

      {formType === "update" && (
        <div className="flex items-center gap-3 mt-4">
          <Button
            type="button"
            buttonType="secondary"
            onClick={() =>
              handleUpdateBooking(
                bookingId!,
                checkInDate || "",
                checkOutDate || "",
                checkinRef.current?.value || "",
                checkoutRef.current?.value || ""
              )
            }
          >
            Update
          </Button>

          <Button
            type="button"
            buttonType="danger"
            onClick={() => handleRemoveBooking(bookingId!)}
          >
            Delete
          </Button>
        </div>
      )}
    </form>
  );
}
