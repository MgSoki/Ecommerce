import { useCartContext } from "@/contexts/CartContext";
import React from "react";
import ConfirmDialog from "../ui/ConfirmDialog";

const CartItemUi = ({ id, title, price, image, quantity }) => {
  const { quantityControl } = useCartContext();
  return (
    <div>
      <div className="border-2 group relative duration-1000 select-none border-neutral-950 group p-3">
        <img src={image} className=" w-24 object-contain -mt-14 h-24" />
        <div className=" select-none hidden group-hover:block duration-500 absolute top-9 right-7">
          <ConfirmDialog
            id={id}
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 stroke-red-600 active:scale-95 hover:opacity-75 cursor-pointer h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            }
            title={"Are you sure to remove?"}
            description={"Please reconsider kind sir"}
            confirmText="Yes Remove it"
          />
        </div>

        <div className=" flex flex-col gap-3  mt-3">
          <p className=" text-xl font-serif text-neutral-800 truncate">
            {title}
          </p>

          <div className="flex justify-between items-center">
            <p className=" font-mono text-lg text-neutral-600 ">${price}</p>
            <div className=" flex justify-around gap-3 quantity-control">
              <div onClick={() => quantityControl("decrease", id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 active:scale-95 select-none hover:stroke-neutral-600 stroke-neutral-800 cursor-pointer h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <p className=" w-[1rem] text-end">{quantity}</p>
              <div onClick={() => quantityControl("increase", id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 active:scale-95 select-none hover:stroke-neutral-600 stroke-neutral-800 cursor-pointer h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemUi;
