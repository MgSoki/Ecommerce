import React from "react";

const CartSkeleton = () => {
  return (
    <div className="border-2 group relative animate-pulse duration-1000 select-none border-neutral-950 group p-3">
      <div className="w-24 h-24 bg-neutral-200 -mt-14 animate-pulse"></div>
      <div className="flex flex-col gap-3 mt-4">
        <p className=" h-4 w-full bg-neutral-200 rounded-xl  animate-pulse"></p>
        <div className="flex justify-between pb-3 items-center">
          <p className=" bg-neutral-200 animate-pulse h-8  w-8 rounded-full"></p>
          <p className=" bg-neutral-200 animate-pulse h-8  w-8 rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
