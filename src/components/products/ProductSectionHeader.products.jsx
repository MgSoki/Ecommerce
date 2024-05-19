import React from "react";

const ProductSectionHeader = ({ children }) => {
  return (
    <p className=" my-6 md:mb-12 text-center font-serif font-medium  text-xl md:text-5xl text-neutral-600 ">
      {children}
    </p>
  );
};

export default ProductSectionHeader;
