import React, { useState } from "react";
import { ProductCard, ProductSectionHeader, ProductSkeleton } from ".";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useFetch from "@/hook/useFetch";
import { getData } from "@/service/product.service";

const FeaturedProducts = ({ data }) => {
  const [featuterdProductData, setfeaturedProductData] = useState([]);
  const { error, loading } = useFetch(
    setfeaturedProductData,
    getData,
    "products"
  );

  return (
    <div>
      <ProductSectionHeader>Featured Products</ProductSectionHeader>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {featuterdProductData
            .filter((el) => el.rating.rate.toFixed(0) == 5)
            .map((data) => (
              <CarouselItem key={data.id} {...data} className="md:basis-1/2">
                {loading ? (
                  <>
                    {skeletonPlaceHolder(3).map((index) => (
                      <ProductSkeleton key={index} />
                    ))}
                  </>
                ) : (
                  <ProductCard {...data} />
                )}
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
