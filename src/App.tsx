import { useState } from "react";
import { BookingsContext } from "./@contexts/BookingsContext";
import { HouseProps } from "./@types/HouseProps";
import { CardsContainer } from "./components/CardsContainer/CardsContainer.component";
import { Container } from "./components/Container/Container.component";
import { Drawer } from "./components/Drawer/Drawer.component";
import { Header } from "./components/Header/Header.component";

export function App() {
  const [showBookings, setShowBookings] = useState(false);
  const [bookings, setBookings] = useState<HouseProps[]>([]);

  function setShowBookingsVisibility(showBookings: boolean) {
    setShowBookings(showBookings);
  }

  function addBooking(booking: HouseProps) {
    setBookings([...bookings, booking]);
  }

  return (
    <BookingsContext.Provider
      value={{
        showBookings,
        setShowBookingsVisibility,
        bookings,
        addBooking,
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
