import React from "react";
import { CartHeader, CartSkeleton, EmptyCart } from ".";
import CartItemUi from "./CartItemUi.cart";
import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/CartContext";
import { useAppContext } from "@/contexts/AppContext";

const Cart = ({ onClose }) => {
  const { cartData, cartLoading } = useCartContext();
  const { skeletonPlaceHolder } = useAppContext();
  return (
    <div className="h-full relative bg-white w-full max-w-md mx-auto shadow-xl overflow-y-auto">
      <CartHeader onClose={onClose} total={cartData.length} />
      <div className="px-4 h-[500px] overflow-y-auto">
        {cartData.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="grid gap-14 grid-cols-1">
              <div className="h-6"></div>
              {cartLoading ? (
                skeletonPlaceHolder(cartData.length).map((index) => (
                  <CartSkeleton key={index} />
                ))
              ) : (
                <>
                  {cartData.map((data) => (
                    <CartItemUi key={data.id} {...data} />
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </div>
      {cartData.length > 0 && (
        <div className="w-full p-3 flex justify-center border-t absolute bottom-0">
          <Button className="w-full bg-neutral-600 hover:bg-neutral-700 active:scale-95 text-white">
            Order Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
