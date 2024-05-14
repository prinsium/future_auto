import Image from "next/image";

export default function Homepage(){
    return(
        <div className="flex justify-center items-center my-12">

            <Image src="/car.png" width={2000} height={2000} alt="car" />

        </div>
    )
}