import { CardsContainer } from "./components/CardsContainer/CardsContainer.component";
import { Container } from "./components/Container/Container.component";
import { Header } from "./components/Header/Header.component";

export function App() {
  return (
    <Container>
      <Header />
      <CardsContainer />
    </Container>
  );
}
