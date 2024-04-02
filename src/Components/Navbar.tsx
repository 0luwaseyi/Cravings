"use client"

import Link from "next/link"
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState } from 'react';




const Navbar = ()=>{

    

    const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleNav = () => {
    setToggleSidebar(!toggleSidebar);
  };
    return(
        <div className="flex flex-row px-[0vw]  lg:px-[4vw]  justify-between items-center fixed top-0 w-full  z-10 bg-[#fff]">
            
            <div className="flex justify-between items-center ml-[5vw]">
            <h1 className="font-bold text-xl">Craving</h1>
            
                </div>
                
                <div className="flex space-x-[3vw] p-3 list-none ">
                    <Link href ={"/"}><li className="text-[#000] hover:text-[#ff800b]">Home</li></Link>
                    <Link href ={"/"}><li className="text-[#000] hover:text-[#ff800b]" >Features</li></Link>
                    <Link href ={"/"}><li className="text-[#000] hover:text-[#ff800b]">Groceries</li></Link>
                    <Link href ={"/"}><li className="text-[#000] hover:text-[#ff800b]">Contact us</li></Link>
                </div>

                <div className="flex space-x-4">
                    <button className="w-[9vw] border border-[#ff800b] bg-[#ff800b] hover:bg-[#fff] hover:text-[#000] hover:border-[#000] text-[#fff] text-[1.1vw] p-2 rounded-full cursor-pointer outline-none">Log in </button>
                    
                </div>

            
           
                <div className={`sm:hidden flex space-x-[20vw] h-[8vh] px-[0vw] fixed top-0 w-full  z-10 bg-[#fff] shadow-medium ml-[0vw]  md:hidden flex-row`}>
            {toggleSidebar ? (
              <AiFillCloseCircle className="cursor-pointer w-[10vw] h-[13vh] mt-[-4vw] ml-[5vw]" onClick={toggleNav} />
            ) : (
              <HiMenu className="cursor-pointer w-[10vw] h-[13vh] mt-[-4vw] ml-[5vw]" onClick={toggleNav} />
            )}
            <Link href={"/"}>
              <div className='flex mt-[6vw] justify-center text-center'>
                <h1 className="font-bold text-3xl">Craving</h1>
        
              </div>
            </Link>
            {toggleSidebar && (
              <div className='fixed w-[80vw] h-screen p-0 mt-[18vw] bg-white z-10 animate-ease-in'>
                <div className='flex flex-col space-y-4 text-center my-[26vw] text-[#ff800b]'>
                  <h1>Home</h1>
                  <h1>Features</h1>
                  <h1>Groceries</h1>
                  <h1>Contact us</h1>
                </div>
              </div>
            )}
          </div>
         
        </div>

    )
}

export default Navbar