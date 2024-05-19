import useFetch from "@/hook/useFetch";
import { getData } from "@/service/product.service";
import { createContext, useContext, useEffect, useState } from "react";
import { useAppContext } from "./AppContext";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { setProductData } = useAppContext();

  const initialPriceRange = { min: 0, max: 1000 };
  const initialRatingRange = { min: 1, max: 5 };

  // price
  const [priceRange, setPriceRange] = useState(initialPriceRange);

  const handleMinPrice = (e) => {
    setPriceRange({
      ...priceRange,
      min: parseFloat(e.target.value),
    });
  };

  const handleMaxPrice = (e) => {
    setPriceRange({
      ...priceRange,
      max: parseFloat(e.target.value),
    });
  };

  // rating
  const [ratingRange, setRatingRange] = useState(initialRatingRange);

  const handleMinRating = (e) => {
    setRatingRange({
      ...ratingRange,
      min: parseFloat(e.target.value),
    });
  };

  const handleMaxRating = (e) => {
    setRatingRange({
      ...ratingRange,
      max: parseFloat(e.target.value),
    });
  };

  // category

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // filter form
  const filterProducts = async (
    selectedCategory,
    minPrice,
    maxPrice,
    minRating,
    maxRating
  ) => {
    if (selectedCategory === "all") {
      const data = await getData("products");
      const filteredData = data.filter(
        (el) =>
          el.rating.rate <= maxRating &&
          el.rating.rate >= minRating &&
          el.price >= minPrice &&
          el.price <= maxPrice
      );
      setProductData(filteredData);
    } else {
      const data = await getData(`products/category/${selectedCategory}`);
      console.log(data);
      const filteredData = data.filter(
        (el) =>
          el.rating.rate <= maxRating &&
          el.rating.rate >= minRating &&
          el.price >= minPrice &&
          el.price <= maxPrice
      );
      setProductData(filteredData);
    }
  };

  // reset
  const resetForm = () => {
    setSelectedCategory("all");
    setPriceRange(initialPriceRange);
    setRatingRange(initialRatingRange);
  };

  return (
    <FilterContext.Provider
      value={{
        filterProducts,
        selectedCategory,
        handleCategoryChange,
        handleMinRating,
        ratingRange,
        priceRange,
        handleMinPrice,
        handleMaxRating,
        handleMaxPrice,
        resetForm,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
