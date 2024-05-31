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
        </div>
      </div>
    </div>
  );
}
