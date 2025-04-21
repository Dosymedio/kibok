import ProdctTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/products";
import { Heart } from "lucide-react";



export type InfoProductProps = {
    product: ProductType
}

const InfoProduct = (props: InfoProductProps) => {
    const {product} = props
    const {addItem} = useCart()
    const {addLoveItem, lovedItems} = UseLovedProducts()
    

    return ( 
        <div>
            <div className="justify-between mb-3 sm:flex">
                <h1 className="text-2xl">{product.productName}</h1>
                <ProdctTasteOrigin origin={product.origin} taste={product.taste}/>
            </div>
            <Separator className="my-4"/>
            <p>{product.description}</p>
            <Separator className="my-4"/>
            <p className="my-4 text-2xl">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-5">
                <Button className="flex-1" onClick={()=> addItem(product)}>Comprar</Button>
                <Heart 
                width={30}
                strokeWidth={1} 
                className="text-black hover:fill-black transition duration-300 cursor-pointe"
                onClick={() => addLoveItem(product)}/>
            </div>
        </div>
     );
}
 
export default InfoProduct;