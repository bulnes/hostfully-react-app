import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BookingsContext } from "./@contexts/BookingsContext";
import { BookingProps } from "./@types/BookingProps";
import { CardsContainer } from "./components/CardsContainer/CardsContainer.component";
import { Container } from "./components/Container/Container.component";
import { Drawer } from "./components/Drawer/Drawer.component";
import { Header } from "./components/Header/Header.component";

export function App() {
  const [showBookings, setShowBookings] = useState(false);
  const [bookings, setBookings] = useState<BookingProps[]>([]);

  function setShowBookingsVisibility(showBookings: boolean) {
    setShowBookings(showBookings);
  }

  function addBooking(booking: BookingProps) {
    setBookings((bookingsState) => [...bookingsState, booking]);
  }

  function updateBooking(bookingId: number, updatedBooking: BookingProps) {
    console.log("updateBooking", bookingId, updatedBooking);

    setBookings((bookingsState) =>
      bookingsState.map((booking) =>
        booking.bookingId === bookingId ? updatedBooking : booking
      )
    );
  }

  function removeBooking(bookingId: number) {
    console.log("removeBooking", bookingId);

    const bookingListId = bookings.findIndex(
      (booking) => booking.bookingId === bookingId
    );

    if (bookingListId >= 0) {
      const newBookingsList = bookings.filter((_, id) => id !== bookingListId);
      setBookings(newBookingsList);
    }
  }

  return (
    <BookingsContext.Provider
      value={{
        showBookings,
        setShowBookingsVisibility,
        bookings,
        addBooking,
        removeBooking,
        updateBooking,
      }}
    >
      <Container>
        <Header />
        <CardsContainer />
      </Container>
      <Drawer />
      <ToastContainer position="bottom-right" theme="dark" />
    </BookingsContext.Provider>
  );
}
