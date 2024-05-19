import React from "react";
import ProductSkeleton from "./ProductSkeleton.products";
import { FeaturedProducts, ProductCard, ProductSectionHeader } from ".";
import { useAppContext } from "@/contexts/AppContext";
import { Toaster } from "sonner";

const ProductSection = () => {
  const { productData, loading, skeletonPlaceHolder } = useAppContext();

  return (
    <>
      <Toaster className=" pointer-events-none select-none" richColors />
      <div className="space-y-10">
        <FeaturedProducts />
        {!loading && (
          <p className=" my-6 md:mb-12 text-center font-serif font-medium  text-lg md:text-3xl text-neutral-600 ">
            All Products
          </p>
        )}
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-3">
          {loading ? (
            <>
              {skeletonPlaceHolder(6).map((index) => (
                <ProductSkeleton key={index} />
              ))}
            </>
          ) : (
            <>
              {productData.map((data) => (
                <ProductCard key={data.id} {...data} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
