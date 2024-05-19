import React from "react";
import { Wrapper } from "../ui";
import { AddButton, StarCounter } from "../products";
import { Link, useNavigate } from "react-router-dom";

const ProductDetailCard = ({
  id,
  title,
  price,
  image,
  category,
  rating: { rate, count },
  description,
}) => {
  const nav = useNavigate();
  const handleClick = () => {
    nav(-1);
  };
  return (
    <Wrapper>
      <Link
        onClick={handleClick}
        className=" inline-flex px-4 py-2 select-none active:scale-95 mb-3 gap-2 bg-neutral-600 text-neutral-200 "
      >
        Go Back
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </Link>

      <div className=" border border-neutral-400 p-5 grid grid-cols-1 items-center gap-3 md:grid-cols-3">
        <div className=" flex justify-center items-center md:justify-start col-span-1">
          <img
            alt="ecommerce"
            className="rounded  md:w-80 h-40 w-40 md:h-80 object-contain"
            src={image}
          />
        </div>
        <div className=" md:col-span-2 md:border-l md:ps-5 space-y-5">
          <h2 className="text-sm title-font text-neutral-500 tracking-widest">
            {category}
          </h2>
          <h1 className="text-neutral-900 text-3xl title-font font-medium mb-1">
            {title}
          </h1>
          <div className="flex gap-3">
            <div className="rating-stars flex gap-1">
              <StarCounter rating={rate} />
            </div>
            <p className=" text-neutral-400">{count} reviews</p>
          </div>
          <p className="leading-relaxed">{description}</p>
          <div className="flex gap-8">
            <span className="title-font font-medium text-2xl text-neutral-900">
              ${price}
            </span>
            <AddButton id={id} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetailCard;
