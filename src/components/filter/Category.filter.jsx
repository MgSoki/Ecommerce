import { useFilterContext } from "@/contexts/FilterContext";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hook/useFetch";
import { getData } from "@/service/product.service";

const Category = () => {
  const { selectedCategory, handleCategoryChange } = useFilterContext();
  const [category, setCategory] = useState([]);

  const { error, loading } = useFetch(
    setCategory,
    getData,
    "products/categories"
  );

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="category" className="text-lg font-serif">
        Category
      </label>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e)}
        id="category"
        className="capitalize border-2 border-neutral-600 p-2 bg-white outline-none"
      >
        <option value="all">all</option>
        {category.map((category) => (
          <option key={category.toLowerCase()} value={category.toLowerCase()}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
