
import { feature_card } from "@/Constants";
import Image from "next/image"


const Features = ()=>{
    return(
        <div>
          <div className="flex flex-col mx-[6vw] lg:mx-[0] text-center mt-[5vw] space-y-3">
            <h1 className=" font-extrabold text-3xl text-[#2e312f]">
                Our Features
            </h1>
            <p className="text-[#3d3a3a] text-sm">In terms of service to customers, we are undoubtedly the best in taking <br className="hidden lg:block"/> and delivering your orders promptly.</p>

          </div>

          <div className="">
            <div className=" flex flex-col space-x-0 space-y-5 px-[5vw] lg:px-[0] lg:flex-row lg:space-x-[9vw] lg:space-y-0 lg:justify-center my-[3vw]">
                {feature_card.map((feature)=>(
                   <div key={feature.id} className="flex flex-col space-y-2 border p-4 border-[#e7e6e6] w-[90vw] lg:w-[23vw]">
                    <Image src ={feature.image} alt="pictures" width={350} height={180}/>
                    <h1 className="font-extrabold text-[#2e312f]">
                        {feature.title}
                    </h1>
                    <p className="text-[#3d3a3a] text-xs">{feature.description}</p>
                    </div> 
                ))}
            </div>
          </div>
        </div>
    )
}
export default Features;