import { useState } from "react";
import swal from "sweetalert";
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
    // Check if there are any bookings that overlap with the new booking
    const bookingDate = new Date(booking.checkInDate);
    const bookingCheckOutDate = new Date(booking.checkOutDate);
    const overlappingBooking = bookings.find(
      (b) =>
        new Date(b.checkInDate) < bookingCheckOutDate &&
        new Date(b.checkOutDate) > bookingDate
    );

    if (overlappingBooking) {
      swal("Overlapping booking", "Please select another date range", "error");
      return;
    }

    setBookings([...bookings, booking]);

    swal("Booking added", "Your booking has been added", "success", {
      timer: 1500,
    });
  }

  function removeBooking(bookingId: number) {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );
    setBookings(updatedBookings);
  }

  function updateBooking(bookingId: number, updatedBooking: BookingProps) {
    const updatedBookings = bookings.map((booking) =>
      booking.id === bookingId ? updatedBooking : booking
    );
    setBookings(updatedBookings);
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
    </BookingsContext.Provider>
  );
}
