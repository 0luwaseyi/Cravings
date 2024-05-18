
import { footer_links } from '@/Constants/index'
import Link from "next/link"
import Image from "next/image"



const Footer = () => {
  return (
    <div className='bg-[#fff]'>
       <footer className='flex flex-col pl-[5vw] space-x-0 space-y-4 lg:space-y-0 lg:flex lg:flex-row text-[#fff] pt-[5vw] lg:space-x-[4vw] justify-around'>
        <div className='flex flex-col space-y-[5vw]'>
        <div className='flex text-[#fff] pb-[4vw] pt-[5vw] lg:flex lg:text-[#fff] lg:pb-[0vw] lg:pt-[0vw] '>
           
            <h1 className='font-bold text-xl text-[#2b2b2b] lg:font-bold'>Cravings</h1>
        </div>

        <div className='hidden lg:flex space-x-3'>
            <h1>Customer service <br/> 24/7 support by chat, emails and calls </h1> 
        </div>

        </div>
       
        <div className='flex flex-col space-y-[5vw] lg:flex lg:flex-row lg:space-x-[10vw] lg:justify-between lg:space-y-[0vw]'>
          {footer_links.map(( link )=>(
            <div key ={link.title}
            className = "flex flex-col lg:flex lg:flex-col space-y-[0.9vw]">
                <h3 className = "text-medium text-[#2b2b2b] font-black lg:font-black">{link.title}</h3>
                <p className='text-[4vw] text-[#2b2b2b] flex flex-col lg:flex lg:flex-col lg:text-[0.8vw] space-y-[0.8vw]'>
                {link.links.map((item)=> (
                    <Link 
                    key = {item.title}
                    href = {item.url}
                    className="">
                        {item.title}
                    </Link>
                ))}
                </p>
             
                </div>
          ))}  
        </div>

        <div className='flex flex-row space-x-3'>
            <Link href="/">
            <Image src ="/facebook.svg" alt = "facebook" width={40} height={30}/>
            </Link>
           
           <Link href="/">
           <Image src ="/twitter.svg" alt = "twitter" width={40} height={30}/>
           </Link>

           <Link href="/">
           <Image src ="/instagram.svg" alt = "instagram" width={40} height={30}/>
           </Link>


         
           

        </div>
     

       </footer>

       <div className='flex space-x-3 justify-center my-[10vw] lg:hidden'>
       <h1>Customer service <br/> 24/7 support by chat, emails and calls </h1>  
           
        </div>

       <div className='flex justify-between justify-start mt-[3vw] mx-[7vw] pb-[3vw]'>
           <div className='text-[#D1CCD1] text-sm'>
            <p>@2022-2023.All Right Reserved</p>
           </div>

           <div className='flex space-x-3 text-[#8C8989] text-sm'>
            <Link href ={"/"}>
            <p>Privacy policy</p>
            </Link>
            <Link href ={"/"}>
            <p>Terms of service</p>    
            </Link>
            <Link href ={"/"}>
            <p>Disclosure</p>     
            </Link>

           </div>
        </div>
    </div>

  )
}

export default Footer