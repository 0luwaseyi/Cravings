import Image  from "next/image";


const Order =()=>{
    return(
        <div>
            <div className="relative w-full h-[190vw] lg:h-[30.5vw]">
                <Image src = "/blackback.svg" alt="background" layout="fill" objectFit="cover"/>

                <div className="absolute inset-0 flex flex-col space-y-3 space-x-0 lg:flex-row ml-[8vw] lg:space-x-[10vw] lg:space-y-0">
            <div className="w-[36vw]">
                <div className="w-[85vw] lg:w-[40vw] overflow-hidden text-center lg:text-left mx-auto pt-5 lg:pt-[7vw] flex flex-col space-y-2">
                <h1 className="font-bold text-[#fff] lg:text-[#fff] text-2xl">Place an order with our mobile app</h1>
                <p className="text-[#fff] text-sm">Why wait in line or stress about dinner plans when you can have a gourmet experience delivered
                    straight to your doorstep? Our mobile app makes it convenient for you to explore our diverse menu, customize
                    your order and track in real time.</p>
                    <p className="text-[#fff] text-sm">Complete your order swiftly and securely with our streamlined checkout process. Your satisfaction is our priority, and that includes
                        making your transaction hassle free.
                    </p>

                    <div className="flex flex-row space-x-3 justify-center align-items items-center lg:justify-start">
                        <Image src ="/secondapple.svg" alt="applebutton" width={120} height={80}/>
                        <Image src ="/secondgoogle.svg" alt="googlebutton" width={120} height={80}/>
                    </div>

                </div>
               
            </div>

            <div className="lg:pt-[5.6vw]">
                <Image src="/secondphone.svg" alt="iphone" width={258} height={200}/>
            </div>

            </div>
          
            </div>

          
        </div>

    )
}

export default Order;