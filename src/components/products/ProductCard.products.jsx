import React from "react";
import { StarCounter } from ".";
import AddProductButton from "./AddProductButton.products";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  price,
  image,
  rating: { rate, count },
  description,
}) => {
  return (
    <div className="product-card group">
      <img
        src={image}
        className=" group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
      />
      <div className=" border border-neutral-600 p-5">
        <p className=" font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {title}
        </p>
        <p className="text-neutral-500 text-sm h-[5rem] mb-4 line-clamp-3">
          {description}
        </p>
        <Link
          to={`productDetail/${id}`}
          className=" flex justify-end text pb-3 text-neutral-600 hover:text-neutral-700 cursor-pointer select-none underline"
        >
          see detail
        </Link>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
            <StarCounter rating={rate} />
          </div>
          <p className=" text-neutral-700 font-medium text-sm">
            <span className="italic">rated by</span> {count}
          </p>
        </div>
        <p className="product-card-price font-heading font-bold text-xl mb-3">
          $ <span className="price">{price}</span>
        </p>

        <AddProductButton id={id} />
      </div>
    </div>
  );
};

export default ProductCard;
