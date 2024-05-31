import { useContext, useState } from "react";
import { BookingsContext } from "../../@contexts/BookingsContext";
import housesData from "../../@data/houses.json";
import { HouseProps } from "../../@types/HouseProps";
import { Card } from "../Card/Card.component";

export function CardsContainer() {
  const { showBookings, setShowBookingsVisibility } =
    useContext(BookingsContext);

  const [houses, setHouses] = useState<HouseProps[]>([...housesData]);

  function handleSortHouses(sortBy: string) {
    const sortedHouses = [...houses].sort((a, b) => {
      if (sortBy === "newest") {
        return a.id - b.id;
      }

      if (sortBy === "lowest-price") {
        return a.pricePerNight - b.pricePerNight;
      }

      if (sortBy === "highest-price") {
        return b.pricePerNight - a.pricePerNight;
      }

      return 0;
    });

    setHouses(sortedHouses);
  }

  return (
    <div className="p-3 md:p-4 xl:p-5">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <label htmlFor="sort-houses" className="text-2xl font-semibold block">
            Sort by
          </label>
          <select
            className="p-2 mt-2 border border-gray-300 rounded-md"
            name="sort-houses"
            id="sort-houses"
            onChange={(e) => handleSortHouses(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="lowest-price">Lowest price</option>
            <option value="highest-price">Highest price</option>
          </select>
        </div>

        <button
          type="button"
          className="mt-5 py-2 px-4 bg-blue-700 text-white rounded-md"
          onClick={() => setShowBookingsVisibility(!showBookings)}
        >
          Show bookings
        </button>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {houses.map((house) => (
          <Card key={house.id} {...house} />
        ))}
      </div>
    </div>
  );
}
