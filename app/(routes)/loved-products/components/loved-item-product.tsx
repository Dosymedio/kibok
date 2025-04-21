import ProductImageMiniature from "@/components/shared/product-image-miniature";
import ProdctTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/products";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemsProductProps {
    product: ProductType
}

const LovedItemsProduct = (props: LovedItemsProductProps) => {
    const {product} = props
    const router = useRouter()
    const {removeLovedItem} = UseLovedProducts()
    const {addItem} = useCart()


    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return ( 
        <li className="flex py-6 border-b">
            <ProductImageMiniature slug={product.slug} url={product.images?.[0].url}/>
            <div className="flex  justify-between flex-1 px-6">
                
                    <div>
                        <h2 className="text-lg font-bold">{product.productName}</h2>
                        <p className="font-bold">{formatPrice(product.price)}</p>
                        <ProdctTasteOrigin origin={product.origin} taste={product.taste}/>
                        <Button className="mt-5 rounded-full" onClick={addToCheckout}>
                            Añadir al carrito
                        </Button>
                    </div>
                    <div>
                        <button className={cn("rounded-full felx items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                            <X size={20} onClick={ () => removeLovedItem(product.id)}/>
                        </button>
                    </div>
            </div>
        </li>
     );
}
 
export default LovedItemsProduct;