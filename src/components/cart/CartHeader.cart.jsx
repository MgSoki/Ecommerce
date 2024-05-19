import CloseOffcanvasButton from "@/components/ui/CloseOffcanvasButton";
import React from "react";

const CartHeader = ({ onClose, total }) => {
  return (
    <div className="flex justify-between mb-3 items-center p-4 border-b">
      <div className=" flex gap-3">
        <h3 className="font-bold text-gray-800 " tabIndex="-1">
          Your Cart Items{" "}
        </h3>
        <span className=" h-6 w-6 flex justify-center items-center bg-neutral-600 text-white">
          <p className=" font-mono">{total}</p>
        </span>
      </div>
      <CloseOffcanvasButton onClose={onClose} />
    </div>
  );
};

export default CartHeader;
