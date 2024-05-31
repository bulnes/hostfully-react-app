import { useState } from "react";
import { BookingsContext } from "./@contexts/BookingsContext";
import { CardsContainer } from "./components/CardsContainer/CardsContainer.component";
import { Container } from "./components/Container/Container.component";
import { Drawer } from "./components/Drawer/Drawer.component";
import { Header } from "./components/Header/Header.component";

export function App() {
  const [showBookings, setShowBookings] = useState(false);

  function setShowBookingsVisibility(showBookings: boolean) {
    setShowBookings(showBookings);
  }

  return (
    <BookingsContext.Provider
      value={{ showBookings, setShowBookingsVisibility }}
    >
      <Container>
        <Header />
        <CardsContainer />
      </Container>
      <Drawer />
    </BookingsContext.Provider>
  );
}
