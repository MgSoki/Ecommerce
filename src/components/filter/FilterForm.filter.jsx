import React from "react";
import Category from "./Category.filter";
import { CloseFilterButton, PriceFilter, ResetFilter } from ".";
import RatingFilter from "./RatingFilter.filter";
import { useFilterContext } from "@/contexts/FilterContext";

const FilterForm = ({ onClose }) => {
  const {
    filterProducts,
    priceRange,
    selectedCategory,
    ratingRange,
    resetForm,
  } = useFilterContext();
  const handleForm = (e) => {
    e.preventDefault();
    filterProducts(
      selectedCategory.toLowerCase(),
      priceRange.min,
      priceRange.max,
      ratingRange.min,
      ratingRange.max
    );
  };
  return (
    <div className="h-full relative bg-white w-full max-w-md mx-auto shadow-xl overflow-y-auto">
      <div className=" p-4 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 " tabIndex="-1">
          Filter Products
        </h3>
        <CloseFilterButton onClose={onClose} />
      </div>
      <form className=" p-4" onSubmit={(e) => handleForm(e)}>
        <div className=" space-y-8">
          <div className=" flex justify-between items-start">
            <Category />
            <ResetFilter resetForm={resetForm} />
          </div>
          <PriceFilter />
          <RatingFilter />
          <button
            onClick={onClose}
            className="block w-full duration-300 p-3 text-neutral-200 hover:opacity-85 bg-neutral-600"
          >
            Filter Products
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
