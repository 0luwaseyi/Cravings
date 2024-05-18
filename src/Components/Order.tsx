import Image  from "next/image";


const Order =()=>{
    return(
        <div>
            <div className="w-full h-[190vw] lg:h-[30.5vw]">
                <Image src = "/blackback.svg" alt="background" layout="responsive" objectFit="cover" width={100} height={100}/>
            </div>

            <div className="flex flex-col lg:flex-row mt-[70vw] lg:mt-[-25vw] ml-[8vw] space-x-[10vw]">
            <div className="flex flex-col space-y-4 w-[36vw]">
                <h1 className="font-bold text-[#000] lg:text-[#fff] text-2xl">Place an order with our mobile app</h1>
                <p className="text-[#fff] text-sm">Why wait in line or stress about dinner plans when you can have a gourmet experience delivered
                    straight to your doorstep? Our mobile app makes it convenient for you to explore our diverse menu, customize
                    your order and track in real time.</p>
                    <p className="text-[#fff] text-sm">Complete your order swiftly and securely with our streamlined checkout process. Your satisfaction is our priority, and that includes
                        making your transaction hassle free.
                    </p>

                    <div className="flex flex-row space-x-3">
                        <Image src ="/secondapple.svg" alt="applebutton" width={120} height={80}/>
                        <Image src ="/secondgoogle.svg" alt="googlebutton" width={120} height={80}/>
                    </div>
            </div>

            <div>
                <Image src="/secondphone.svg" alt="iphone" width={258} height={200}/>
            </div>

            </div>
          
        </div>

    )
}

export default Order;