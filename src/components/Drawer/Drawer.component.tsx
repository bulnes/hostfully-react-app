import { useContext } from "react";
import { BookingsContext } from "../../@contexts/BookingsContext";
import { BookingForm } from "../BookingForm/BookingForm.component";

export function Drawer() {
  const { showBookings, setShowBookingsVisibility, bookings } =
    useContext(BookingsContext);

  return (
    <div className={`${showBookings ? "block" : "hidden"}`}>
      <div className="bg-gray-900/50 fixed inset-0 z-30"></div>

      <div className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 lg:w-96">
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

                  {booking.checkInDate && booking.checkOutDate && (
                    <p className="text-gray-500 dark:text-gray-400">
                      {booking.checkInDate} - {booking.checkOutDate}
                    </p>
                  )}

                  <BookingForm formType="update" {...booking} />
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
