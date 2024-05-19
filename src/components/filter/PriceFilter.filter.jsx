import { useFilterContext } from "@/contexts/FilterContext";
import React from "react";

const PriceFilter = () => {
  const { handleMinPrice, handleMaxPrice, priceRange } = useFilterContext();
  return (
    <div className=" flex flex-col gap-3">
      <label htmlFor="min" className="text-lg  font-serif">
        Price Range
      </label>

      <input
        id="min"
        min={0}
        value={priceRange.min}
        onChange={(e) => handleMinPrice(e)}
        type="number"
        placeholder="min price"
        className="focus:border-neutral-800 capitalize border-2 border-neutral-600 p-2 bg-white outline-none"
      />
      <input
        id="max"
        min={0}
        value={priceRange.max}
        onChange={(e) => handleMaxPrice(e)}
        placeholder="max price"
        type="number"
        className="focus:border-neutral-800 capitalize border-2 border-neutral-600 p-2 bg-white outline-none"
      />
    </div>
  );
};

export default PriceFilter;
