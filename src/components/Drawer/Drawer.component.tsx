import { useContext, useRef } from "react";
import { BookingsContext } from "../../@contexts/BookingsContext";
import { BookingProps } from "../../@types/BookingProps";

export function Drawer() {
  const {
    showBookings,
    setShowBookingsVisibility,
    bookings,
    removeBooking,
    updateBooking,
  } = useContext(BookingsContext);

  const checkinRef = useRef<HTMLInputElement>(null);
  const checkoutRef = useRef<HTMLInputElement>(null);

  function handleUpdateBooking(
    bookingId: number,
    checkInDate: string,
    checkOutDate: string
  ) {
    if (!checkInDate || !checkOutDate) {
      return;
    }

    const updatedBooking = {
      ...bookings.find((booking) => booking.id === bookingId),
      checkInDate,
      checkOutDate,
    } as BookingProps;

    updateBooking(bookingId, updatedBooking);
  }

  return (
    <div className={`${showBookings ? "block" : "hidden"}`}>
      <div className="bg-gray-900/50 fixed inset-0 z-30"></div>

      <div className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 lg:w-96 transform-none">
        <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
          </svg>
          Bookings
        </h5>

        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-3 end-3 flex items-center justify-center"
          onClick={() => setShowBookingsVisibility(false)}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="mt-8">
          {bookings.length > 0 ? (
            <ul>
              {bookings.map((booking) => (
                <li key={booking.id} className="mb-8">
                  <div className="flex items-start justify-between flex-col mb-2">
                    <h6 className="text-lg font-semibold">{booking.title}</h6>
                    <span className="text-gray-500 dark:text-gray-400">
                      ${booking.pricePerNight} / night
                    </span>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400">
                    {/* Format the date */}
                    {new Date(booking.checkInDate).toLocaleDateString()} -{" "}
                    {new Date(booking.checkOutDate).toLocaleDateString()}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-start flex-col gap-1">
                      <label htmlFor="checkinUpdate" className="text-gray-600">
                        Check-in
                      </label>

                      <input
                        type="date"
                        id="checkinUpdate"
                        className="border rounded-md p-1"
                        ref={checkinRef}
                        defaultValue={booking.checkInDate}
                      />
                    </div>

                    <div className="flex items-start flex-col gap-1">
                      <label htmlFor="checkoutUpdate" className="text-gray-600">
                        Check-out
                      </label>

                      <input
                        type="date"
                        id="checkoutUpdate"
                        className="border rounded-md p-1 w-full"
                        ref={checkoutRef}
                        defaultValue={booking.checkOutDate}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      type="button"
                      className="text-blue-700 dark:text-blue-400"
                      onClick={() =>
                        handleUpdateBooking(
                          booking.id,
                          checkinRef.current?.value || "",
                          checkoutRef.current?.value || ""
                        )
                      }
                    >
                      Update
                    </button>

                    <button
                      type="button"
                      className="text-red-700 dark:text-red-400"
                      onClick={() => removeBooking(booking.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No bookings yet. Start booking now!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
