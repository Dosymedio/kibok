import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/products";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

interface UseLovedProductsType {
    lovedItems: ProductType[],
    addLoveItem: (data: ProductType) => void
    removeLovedItem: (id: number) => void
}

export const UseLovedProducts = create(persist<UseLovedProductsType>((set, get) => ({
    lovedItems: [],
    addLoveItem: (data: ProductType) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find((item) => item.id === data.id)

        if(existingItem){
            return toast.error("El producto ya existe en la lista 💓")
        }
        set({
            lovedItems: [... get().lovedItems, data]
        })
        toast("Producto añadido a la lista ❤")
    }, 
    removeLovedItem: (id:number) => {
        set({
            lovedItems: [...get().lovedItems.filter((item) => item.id !== id)]    
        })
        toast("El producto se ha eliminado de la lista 💔")
    }
}), {
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage)
} ))