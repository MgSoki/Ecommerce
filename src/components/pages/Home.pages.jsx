import React, { useState } from "react";
import { ProductContainer } from "../products";
import { Wrapper } from "../ui";
import { FilterButton, FilterOffcanvas } from "../filter";

const Home = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  return (
    <Wrapper>
      <FilterButton
        isOpen={isFilterOpen}
        handleToggleFilter={handleToggleFilter}
      />
      <FilterOffcanvas isOpen={isFilterOpen} onClose={handleToggleFilter} />
      <ProductContainer />
    </Wrapper>
  );
};

export default Home;
