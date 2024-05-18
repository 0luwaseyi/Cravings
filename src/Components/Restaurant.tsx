import Image from "next/image"

const Restaurant  = ()=>{
    return(
        <div className="bg-[#f7f7f7] p-[5vw] mt-[10vw]">
            <div className="flex align-items items-center flex-col space-x-0 space-y-4 lg:flex-row  lg:space-y-0 lg:space-x-[17vw]">
                <h1 className="text-3xl text-center lg:text-left font-extrabold text-[#2e312f]">
                    Our featured <br className="hidden lg:block"/>restaurant
                </h1>
                <p className="text-xs text-center lg:text-left text-[#3d3a3a]">We are readily available at different places nationwide, <br className="hidden lg:block"/> always bringing you the best delicacies anywhere you are</p>
                <button className="border   border-[#d1eea7] rounded-full text-[#f1b12b] hover:text-[#fff] hover:bg-[#f1b12b] hover:border-[#f1b12b] w-[34vw] h-[5.5vh]  lg:w-[10vw] lg:h-[7vh]">View all</button>
            </div>

            <div className="block gap-y-5 lg:grid lg:grid-cols-3 lg:gap-5 pt-5">
                <div className="bg-[#fff] mx-[5vw] my-[7vw] lg:my-[0vw] lg:mx-[0vw] p-5 rounded-xl w-[80vw] lg:w-[23vw]">
                    <div className="flex flex-col space-y-4">
                        <Image src = "/foodone.svg" alt = "foodone" className="w-[80vw]" width={260} height={100}/>
                        <h1 className="text-[#2e312f] font-extrabold">
                            Burger Corner
                        </h1>
                        <p className="text-xs text-[#3d3a3a]">
                          Visit any of our restaurants near you to have a taste of our delicious burger
                        </p>
                        <Image src = "/tags.svg" alt="tags" width={320} height={150}/>
                        <hr/>

                        <div className="flex flex-row space-x-2">
                            <Image src = "/logoone.svg" alt="blogo" width={30} height={30}/>
                            <p className="text-xs text-[#3d3a3a]">located at 173 newcastle street, opens at 7:00am to 11:00pm</p>
                            <Image src="/stars.svg" alt="stars" width={60} height={20}/>

                        </div>

                    </div>

                </div>

                <div className="bg-[#fff] my-[7vw] lg:my-[0vw] mx-[5vw] lg:mx-[0vw] p-5 rounded-xl w-[80vw] lg:w-[23vw]">
                    <div className="flex flex-col space-y-4">
                        <Image src = "/foodtwo.svg" alt = "foodone" className="w-[80vw]" width={260} height={100}/>
                        <h1 className="text-[#2e312f] font-extrabold">
                            Craving & More
                        </h1>
                        <p className="text-xs text-[#3d3a3a]">
                          Visit any of our restaurants near you to have a taste of our delicious burger
                        </p>
                        <Image src = "/tagtwo.svg" alt="tags" width={320} height={150}/>
                        <hr/>

                        <div className="flex flex-row space-x-2">
                            <Image src = "/logotwo.svg" alt="blogo" width={30} height={30}/>
                            <p className="text-xs text-[#3d3a3a]">located at 173 newcastle street, opens at 7:00am to 11:00pm</p>
                            <Image src="/stars.svg" alt="stars" width={60} height={20}/>

                        </div>

                    </div>

                </div>
              

                <div className="bg-[#fff] my-[7vw] lg:my-[0vw] mx-[5vw] lg:mx-[0vw] p-5 rounded-xl w-[80vw] lg:w-[23vw]">
                    <div className="flex flex-col space-y-4">
                        <Image src = "/foodthree.svg" alt = "foodone" className="w-[80vw]" width={260} height={100}/>
                        <h1 className="text-[#2e312f] font-extrabold">
                            Pasta Place
                        </h1>
                        <p className="text-xs text-[#3d3a3a]">
                          Visit any of our restaurants near you to have a taste of our delicious burger
                        </p>
                        <Image src = "/tagthree.svg" alt="tags" width={320} height={150}/>
                        <hr/>

                        <div className="flex flex-row space-x-2">
                            <Image src = "/logothree.svg" alt="blogo" width={30} height={30}/>
                            <p className="text-xs text-[#3d3a3a]">located at 173 newcastle street, opens at 7:00am to 11:00pm</p>
                            <Image src="/stars.svg" alt="stars" width={60} height={20}/>

                        </div>

                    </div>

                </div>
                <div className="bg-[#fff] my-[7vw] lg:my-[0vw] mx-[5vw] lg:mx-[0vw] p-5 rounded-xl w-[80vw] lg:w-[23vw] gap-y-4">
                    <div className="flex flex-col space-y-4">
                        <Image src = "/foodfour.svg" alt = "foodone" className="w-[80vw]" width={260} height={100}/>
                        <h1 className="text-[#2e312f] font-extrabold">
                            The Place
                        </h1>
                        <p className="text-xs text-[#3d3a3a]">
                          Visit any of our restaurants near you to have a taste of our delicious burger
                        </p>
                        <Image src = "/tagfour.svg" alt="tags" width={320} height={150}/>
                        <hr/>

                        <div className="flex flex-row space-x-2">
                            <Image src = "/logofour.svg" alt="blogo" width={30} height={30}/>
                            <p className="text-xs text-[#3d3a3a]">located at 173 newcastle street, opens at 7:00am to 11:00pm</p>
                            <Image src="/stars.svg" alt="stars" width={60} height={20}/>

                        </div>

                    </div>

                </div>
                <div className="bg-[#fff] my-[7vw] lg:my-[0vw] mx-[5vw] lg:mx-[0vw] p-5 rounded-xl w-[80vw] lg:w-[23vw]">
                    <div className="flex flex-col space-y-4">
                        <Image src = "/foodfive.svg" alt = "foodone" className="w-[80vw]" width={260} height={100}/>
                        <h1 className="text-[#2e312f] font-extrabold">
                            Burger Close
                        </h1>
                        <p className="text-xs text-[#3d3a3a]">
                          Visit any of our restaurants near you to have a taste of our delicious burger
                        </p>
                        <Image src = "/tagfive.svg" alt="tags" width={320} height={150}/>
                        <hr/>

                        <div className="flex flex-row space-x-2">
                            <Image src = "/logofive.svg" alt="blogo" width={30} height={30}/>
                            <p className="text-xs text-[#3d3a3a]">located at 173 newcastle street, opens at 7:00am to 11:00pm</p>
                            <Image src="/stars.svg" alt="stars" width={60} height={20}/>

                        </div>

                    </div>

                </div>
                <div className="bg-[#fff] my-[7vw] lg:my-[0vw] mx-[5vw] lg:mx-[0vw] p-5 rounded-xl w-[80vw] lg:w-[23vw]">
                    <div className="flex flex-col space-y-4">
                        <Image src = "/foodsix.svg" alt = "foodone" className="w-[80vw]" width={260} height={100}/>
                        <h1 className="text-[#2e312f] font-extrabold">
                            Wizz's Kitchen
                        </h1>
                        <p className="text-xs text-[#3d3a3a]">
                          Visit any of our restaurants near you to have a taste of our delicious burger
                        </p>
                        <Image src = "/tagsix.svg" alt="tags" width={320} height={150}/>
                        <hr/>

                        <div className="flex flex-row space-x-2">
                            <Image src = "/logosix.svg" alt="blogo" width={30} height={30}/>
                            <p className="text-xs text-[#3d3a3a]">located at 173 newcastle street, opens at 7:00am to 11:00pm</p>
                            <Image src="/stars.svg" alt="stars" width={60} height={20}/>

                        </div>

                    </div>

                </div>


            </div>
            

        </div>
    )
}

export default Restaurant