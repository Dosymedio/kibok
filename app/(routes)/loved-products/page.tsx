"use client"
import { UseLovedProducts } from "@/hooks/use-loved-products";
import LovedItemsProduct from "./components/loved-item-product";

export default function Page() {
    const {lovedItems} = UseLovedProducts ()

    return (
        <div className="max-w-4xl py-4 mx-auto sm:py-32 sm:px-24">
            <h1 className="sm:text-2xl">
                Productos que te gustan
            </h1>
            <div>
                <div>
                    {lovedItems.length === 0 &&(
                        <p>No hay productos en la sección de me gusta</p>
                    )}
                    <ul>
                        {lovedItems.map((item) => (
                            <LovedItemsProduct key={item.id} product={item}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}