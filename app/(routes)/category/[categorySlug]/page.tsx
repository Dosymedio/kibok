"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"

import { ResponseType } from "@/types/response"
import { Separator } from "@radix-ui/react-separator"
import { useParams } from "next/navigation"
import FiltesControlCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/ui/skeletonSchema"
import ProductCard from "./components/product-card"
import { ProductType } from "@/types/products"
import { useState } from "react"

export default function Page() {
  const  params  = useParams() 
  const { categorySlug } = params
  const { result, loading}: ResponseType  = useGetCategoryProduct(categorySlug)
  const [filterOrigin, setFilterOrigin] = useState('')
  console.log(result)
  const filteredProducts = result !== null && !loading && (
    filterOrigin === '' 
    ? result.data 
    : result.data.filter((product: ProductType) => 
      product.origin === filterOrigin)
  )

  //console.log(filteredProducts);
  

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading &&(
        <h1 className="text-3xl font-medium">
          Café {result.data[0].category.categoryName}
        </h1>
      )}
      <Separator/>

      <div className="sm:flex sm:justify-between">
        <FiltesControlCategory setFilterOrigin={setFilterOrigin}/>

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && (
            <SkeletonSchema grid={3}/>
          )}
          {filteredProducts !== null && !loading &&(
            filteredProducts.map((product: ProductType) =>(
              <ProductCard key={product.id} product={product} />
            ))            
          )}
          {filteredProducts !== null && !loading && filteredProducts.length === 0 &&(
            <p>No hay productos con este filtro</p>
          )}
        </div>

      </div>
    </div>

  )
}
