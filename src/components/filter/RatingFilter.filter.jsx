import { useFilterContext } from "@/contexts/FilterContext";
import React from "react";

const RatingFilter = () => {
  const { handleMaxRating, handleMinRating, ratingRange } = useFilterContext();
  return (
    <div className=" flex flex-col gap-3">
      <label htmlFor="min" className=" text-lg font-serif">
        Rating Range
      </label>

      <div className=" flex justify-around items-center gap-4">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="minRating"
            className="block text-sm font-medium text-neutral-600"
          >
            Minimum Rating: {ratingRange.min}
          </label>
          <input
            type="range"
            value={ratingRange.min}
            id="minRating"
            name="minRating"
            min="1"
            max="4"
            onChange={(e) => handleMinRating(e)}
            step="1"
            className="w-full"
          />
        </div>

        <div className=" flex gap-3 flex-col">
          <label
            htmlFor="maxRating"
            className="block text-sm font-medium text-neutral-600"
          >
            Maximum Rating: {ratingRange.max}
          </label>
          <input
            type="range"
            value={ratingRange.max}
            id="maxRating"
            name="maxRating"
            min="2"
            max="5"
            onChange={(e) => handleMaxRating(e)}
            step="1"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RatingFilter;
