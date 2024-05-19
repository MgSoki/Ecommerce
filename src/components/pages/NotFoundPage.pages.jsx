import React from "react";
import { ProductSectionHeader } from "../products";
import { Wrapper } from "../ui";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <ProductSectionHeader>
        Error 404! Please go back home
      </ProductSectionHeader>
      <Link
        to={"/"}
        onClick={handleToggleOffcanvas}
        className=" bg-neutral-400 hover:bg-neutral-500 duration-300 py-2 px-4 text-neutral-100 rounded"
      >
        Go Home
      </Link>
    </Wrapper>
  );
};

export default NotFoundPage;
