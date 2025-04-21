"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"



export const dataCarouselTop =[
    {
        id: "1",
        title: "Envio en 24 Horas!!",
        description:"Solo aplica para clientes premium",
        link: "#!"
    },
    {
        id: "2",
        title: "Consigue un descuento e hasta el 20% en compras de mas de $400!!",
        description:"Solo aplica para clientes premium",
        link: "#!"
    },
    {
        id: "3",
        title: "Devoluciones y entregas gratuitas",
        description:"Dentro de las primeras 72 hrs",
        link: "#!"
    },
    {
        id: "4",
        title: "Compra novedades",
        description:"Descuento del 5% en los articculos mas recientes",
        link: "#!"
    },
]
const CarouselTextBaner = () => {
    const router = useRouter()

    return(
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-x-4xl mx-auto"
            plugins={[
                Autoplay({
                    delay: 2500 
                })
            ]}
            >  
                <CarouselContent>

                
                {dataCarouselTop.map(({id, title, link, description}) => (
                    <CarouselItem key={id} onClick={() => router.push (link)} className="cursor-pointer">
                        <div>
                            <Card className="shadow-none border-none bg-transparent">
                                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                                </CardContent>
                            </Card>
                        </div>                        
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
export default CarouselTextBaner;