"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () => {
    const router = useRouter()
    return(
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
        <div className="flex flex-col-reverse gap-2 sm:flex-row">
            <div className="flex justify-center sm:min-w-[400px]">
                <Image src="/success.gif" alt="Success" width={250} height={500} className="rounded-lg" />
            </div>
            <div>
                <h1 className="text-3xl">|Gracias por tu compra!</h1>
                <p className="my-3">Dentro de poco nuestro equipo de trabajo se pondra en marcha para enviar tu producto lo mas rapido posible, solo relajate y espera. 😁</p>
                <p className="my-3">Gracias de nuevo por poner tu confianza en nosotros  </p>
                <p className="my-3">Disfrutatu cafe tanto como nosotros disfrutamos ofreciendote la mejor experiencia en cafe </p>
                <Button onClick={() => router.push("/")}>Seguir disfrutando café</Button>
            </div>
        </div>
    </div>
    );
}
 
export default PageSuccess;