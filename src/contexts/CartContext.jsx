import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);
  //   calc total
  const calcTotal = () => {
    return cartData
      .reduce(
        (total, item) => total + item.quantity * parseFloat(item.price),
        0
      )
      .toFixed(2);
  };

  // remove
  const removeFromCart = (id) => {
    setCartData(cartData.filter((el) => el.id !== id));
  };

  const quantityControl = (type, id) => {
    setCartData((prevCartData) => {
      return prevCartData.map((el) => {
        if (el.id === id) {
          if (type === "increase") {
            return { ...el, quantity: el.quantity + 1 };
          } else if (type === "decrease" && el.quantity > 1) {
            return { ...el, quantity: el.quantity - 1 };
          }
        }
        return el;
      });
    });
  };
  const data = {
    cartData,
    setCartData,
    calcTotal,
    removeFromCart,
    quantityControl,
    cartLoading,
    setCartLoading,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
