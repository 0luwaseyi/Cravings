
import {cards} from "@/Constants/index"
import Image from "next/image"

const Cards = () =>{
    return(
        <div>
            <div className="flex flex-col space-x-0  ml-[10vw] lg:ml-[0] space-y-4 lg:flex-row justify-center lg:space-x-[11vw] lg:space-y-0 mt-[7vw]">
                {cards.map((card:any)=>(
                    <div key={card.id} className="w-[80vw] lg:w-[23vw]">
                      <div className="flex flex-col text-center align-items items-center lg:text-left space-y-3 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-2">
                        <div className="w-[15vw]">
                            <Image src={card.image} alt="pic" width={160} height={120}/>
                            </div>

                            <div>
                                <div className="flex flex-col space-y-2">
                                    <h1 className="text-[#2e312f] text-md lg:text-sm font-extrabold">{card.title}</h1>
                                    <p className="text-sm lg:text-xs text-[#3d3a3a]">{card.description}</p>
                                    </div>
                            </div>
                        </div> 
                    </div>

                ))}

                
            </div>

            <div className="mt-[7vw]">
            <Image src = "/coke.svg" alt="coke" width={1600} height={250}/>
            </div>

            

        </div>
    )

}

export default Cards