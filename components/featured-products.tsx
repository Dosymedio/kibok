"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProduct";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./ui/skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { Expand, Images, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { ProductType } from "@/types/products";

const FeaturedProducts = () => {
  const { loading, result } = useGetFeaturedProducts();
  const router = useRouter();
  const {addItem} = useCart()  
  
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">  
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>

      <Carousel>
        <CarouselContent className="-ml-2 md:ml-4">
          {loading && <SkeletonSchema grid={3} />}

          {result.length > 0 &&
            result.map((product: ProductType) => {
              const { id, slug, productName, taste, origin } = product;

              const imageUrl = product.images?.[0]?.attributes.url
                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images?.[0]?.attributes.url}`
              : null;


              return (
                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="relative flex items-center justify-center px-4 py-2">
                        {imageUrl ? (
                          // eslint-disable-next-line @next/next/no-img-element 
                          <img
                            src={imageUrl}
                            alt={productName}
                            className="w-full h-auto object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-40 bg-gray-100 text-gray-400">
                            <Images className="w-10 h-10" />
                          </div>
                        )}

                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`/product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600"
                            />
                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart size={20} />}
                              className="text-gray-600"
                            />
                          </div>
                        </div>
                      </CardContent>

                      <div className="flex justify-between gap-4 px-8 pt-4">
                        <h3 className="text-lg font-bold">{productName}</h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                            {taste}
                          </p>
                          <p className="px-2 py-1 text-white bg-yellow-900 rounded-full">
                            {origin}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
