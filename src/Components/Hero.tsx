"use client"
import Image from "next/image"
import Link from "next/link"

const Hero = ()=>{
    return(
        <div className="bg-[#f7f7f7] mt-[20vw] mx-[0vw] lg:mt-[5vw] lg:mx-[5vw] rounded-2xl">
            <div className="flex flex-col space-x-0 space-y-5 lg:flex-row lg:mx-[4vw] mx-[1vw] justify-center lg:space-x-[15vw] lg:space-y-0 pt-[10vw]">
                <div className="flex flex-col space-y-5 lg:space-y-3 px-[6vw] lg:px-[0]">
                    <div className="flex justify-center lg:justify-start">
                      <Image src="/delivery.svg" alt="delivery" width={170} height={90}/>  
                    </div>
                    <div>
                        <h1 className="text-4xl text-center lg:text-left lg:text-4xl font-bold mb-[4vw] lg:mb-[1.2vw] leading-tight lg:leading-tight">Enjoy Fresh Food <br className="hidden lg:block"/> in Your <span className="text-[#fb8011]">Healthy Life</span></h1>
                        <p className="text-[#2b2b2b] text-center lg:text-left text-md">Our commitement is to provide you with a menu that not <br className="hidden lg:block"/>  only satisfies your taste buds but also contributes to your overall well-being.</p>
                    </div>

                    <div>
                        <div className="flex flex-col align-items items-center lg:ml-[0] space-x-0 space-y-3 justify-center lg:justify-start lg:flex-row lg:space-x-5 lg:space-y-0">
                            <Link href="/">
                            <Image src="/apple.svg" alt="apple" width={150} height={90}/>

                            </Link>
                            <Link href ="/">
                            <Image src="/google.svg" alt="google" width={150} height={90}/>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col space-x-0 ml-[30vw] space-y-2 lg:ml-[0] lg:flex-row lg:space-x-5 lg:space-y-0 mt-[3vw]">
                            <div>
                            <p className="text-[#3d3a3a]">13k reviews</p>
                            </div>
                           
                            <div>
                                <Image src="/stars.svg" alt="stars" width={85} height={25}/>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex align-items items-center">
                <Image src = "/phone.svg" alt="phone" width={520}  height={691}/>
                </div>

            </div>

        </div>

    )
}

export default Hero