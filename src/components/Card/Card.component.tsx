import { useContext, useRef } from "react";
import swal from "sweetalert";
import { BookingsContext } from "../../@contexts/BookingsContext";
import { HouseProps } from "../../@types/HouseProps";

interface CardProps extends HouseProps {}

export function Card({
  id,
  title,
  description,
  pricePerNight,
  maxGuests,
  bedrooms,
  bathrooms,
  image,
}: CardProps) {
  const { addBooking } = useContext(BookingsContext);

  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);

  function handleBookNow() {
    const checkin = checkinRef.current?.value || "";
    const checkout = checkoutRef.current?.value || "";

    // Check if the check-in or check-out date is empty
    if (!checkin) {
      swal("Check-in date is empty", "Please select a date", "error");
      return;
    }

    if (!checkout) {
      swal("Check-out date is empty", "Please select a date", "error");
      return;
    }

    // Check if the check-in date is before the check-out date
    const bookingDate = new Date(checkin);
    const bookingCheckOutDate = new Date(checkout);

    if (bookingDate > bookingCheckOutDate) {
      swal("Invalid date range", "Please select another date", "error");
      return;
    }

    addBooking({
      id,
      title,
      description,
      pricePerNight,
      maxGuests,
      bedrooms,
      bathrooms,
      image,
      checkInDate: checkin,
      checkOutDate: checkout,
    });
  }

  return (
    <div className="bg-white border rounded-lg shadow-md">
      <div className="flex justify-center pb-5">
        <img
          className="rounded-t-lg"
          src={image}
          alt=""
          loading="lazy"
          width={478}
          height={319}
        />
      </div>

      <div className="px-4 pb-3">
        <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 text-gray-900 mb-3">
          {title}
        </h5>

        <p className="text-gray-600 text-sm break-all mb-4">{description}</p>

        <div>
          <div className="flex items-start lg:items-center justify-between flex-col lg:flex-row">
            <p className="text-gray-900 font-semibold">
              ${pricePerNight} <span className="text-gray-600">/ night</span>
            </p>

            <p className="flex items-center gap-3">
              <span className="text-gray-600">{maxGuests} guests</span>
              <span className="text-gray-600"> • </span>
              <span className="text-gray-600">{bedrooms} bedrooms</span>
              <span className="text-gray-600"> • </span>
              <span className="text-gray-600">{bathrooms} baths</span>
            </p>
          </div>

          <hr className="my-4" />

          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-start flex-col gap-1">
              <label htmlFor="checkin" className="text-gray-600">
                Check-in
              </label>

              <input
                type="date"
                id="checkin"
                className="border rounded-md p-1"
                ref={checkinRef}
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
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-5 py-2 px-4 bg-blue-700 text-white rounded-md"
            onClick={() => handleBookNow()}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
