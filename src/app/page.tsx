import Image from "next/image";
import Navbar from "@/Components/Navbar"
import Hero from "@/Components/Hero"
import Cards from "@/Components/Cards";
import Features from "@/Components/Features"
import Restaurant from "@/Components/Restaurant";
import Customers from "@/Components/Customers"
import Order from "@/Components/Order"

export default function Home() {
  return (
    <main>

    
     
     <Navbar/>
     <Hero/>
     <Cards/>
     <Features/>
     <Restaurant/>
     <Customers/>
     
    </main>
  );
}
