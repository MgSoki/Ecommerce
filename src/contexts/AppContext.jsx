import useFetch from "@/hook/useFetch";
import { getData } from "@/service/product.service";
import { createContext, useContext, useState } from "react";
import { useCartContext } from "./CartContext";
import { Toaster, toast } from "sonner";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { cartData, setCartData } = useCartContext();
  const [productData, setProductData] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const { error, loading } = useFetch(setProductData, getData, "products");

  // add to cart
  const addToCart = (id) => {
    setIsAdding(true);
    setAddedProduct(id);
    setTimeout(() => {
      const productToAdd = productData.find((el) => el.id === id);

      const addedProductData = {
        ...productToAdd,
        quantity: 1,
      };

      setCartData((prev) => [...prev, addedProductData]);

      setIsAdding(false);
      setAddedProduct(null);
      toast.success("Item is added to cart!");
      <Toaster richColors />;
    }, 1000);
  };
  const alreadyAdded = (id) => cartData.some((el) => el.id == id);
  const skeletonPlaceHolder = (length) => {
    return Array.from({ length: length }, (_, index) => index);
  };
  return (
    <AppContext.Provider
      value={{
        productData,
        error,
        setProductData,
        loading,
        isAdding,
        addedProduct,
        addToCart,
        alreadyAdded,
        skeletonPlaceHolder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
