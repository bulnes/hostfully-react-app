import housesData from "../../@data/houses.json";
import { CardProps } from "../../@types/CardProps";
import { Card } from "../Card/Card.component";

export function CardsContainer() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 p-3 md:p-4 xl:p-5">
      {(housesData as CardProps[]).map((house) => (
        <Card key={house.id} {...house} />
      ))}
    </div>
  );
}
