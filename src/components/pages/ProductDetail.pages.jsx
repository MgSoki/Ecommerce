import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetailCard } from "../products";
import useFetch from "@/hook/useFetch";
import { getData } from "@/service/product.service";
import { Toaster } from "sonner";
import ProductDetailSkeleton from "../ui/ProductDetailSkeleton.products";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { loading, error } = useFetch(setProduct, getData, `products/${id}`);
  return (
    <div>
      <Toaster richColors />
      <section className="flex flex-col py-12 md:py-24  min-h-screen ">
        {loading ? (
          <ProductDetailSkeleton />
        ) : (
          <ProductDetailCard {...product} />
        )}
      </section>
    </div>
  );
};

export default ProductDetail;
