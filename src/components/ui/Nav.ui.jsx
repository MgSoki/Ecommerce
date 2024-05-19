import React, { useState } from "react";
import { Logo, Offcanvas, Wrapper } from ".";
import { Button } from "./button";
import { useCartContext } from "@/contexts/CartContext";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const { cartData, setCartLoading } = useCartContext();
  const handleToggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
    setCartLoading(true);
    setTimeout(() => {
      setCartLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-neutral-200 p-3">
      <Wrapper>
        <div className=" flex justify-between">
          <Logo />
          <div className=" flex items-center gap-3">
            <NavLink
              to={"/"}
              className="text-lg hover:text-neutral-700 active:scale-95 text-neutral-600 "
            >
              Home
            </NavLink>
            <button
              onClick={handleToggleOffcanvas}
              className="relative bg-neutral-400 hover:bg-neutral-500 duration-300 py-2 px-4 text-neutral-100 rounded"
            >
              Open Cart
              {cartData.length > 0 && (
                <span className="absolute bg-neutral-600 text-neutral-100 h-6 w-6 text-xs font-bold font-mono rounded-full -top-2 -right-2 flex justify-center items-center">
                  {cartData.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </Wrapper>
      <Offcanvas isOpen={isOffcanvasOpen} onClose={handleToggleOffcanvas} />
    </div>
  );
};
export default Nav;
