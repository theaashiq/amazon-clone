import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Serach from './Search';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
//import Serach from './Serach'; 

const NavBar = () => {
   const cart = useSelector((state) => state.cart.productsNumber)
  return (
    <header className="min-w-[1000px]">
        <div className="flex bg-amazonclone text-white h-[60px]">
              {/* Left  */}
             <div className="flex items-center m-4">
                <Link to={"/"}>
                <img src={"../images/amazon.png"} className="h-[35px] w-[100px] m-2"/>
                </Link>
                
                
                <div className="pr-4 pl-4">
                    <div className="text-sm xl:text-sm">Deliver to</div>
                    <div className="text-sm xl:text-base font-bold">India</div>
                </div>
            </div>
              {/* Middle */}
             <div className="flex-grow relative flex items-center">
                <Serach />
             </div>
              {/* Right */}
            <div className="flex items-center m-4">
            <div className="pr-4 pl-4">
                    <div className="text-sm xl:text-sm">Hello, sign in</div>
                    <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
                </div>
             <div className="pr-4 pl-4">
                    <div className="text-sm xl:text-sm">Returns</div>
                    <div className="text-sm xl:text-base font-bold">& Orders</div>
              </div>
             </div>
             <Link to={"/Checkout"}>
              <div className="flex pr-3 pl-3">
               <ShoppingCartIcon className="h-[48px]" />
                 <div className="relative">
                  <div className='absolute right-[9px] font-bold m-2 text-orange-500'>
                     {cart}
                  </div>
                 </div>
                 <div className="mt-7 text-sm xl:text-sm">
                    Cart
                 </div>
               </div>
           </Link>    
        </div>
        <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
                   <div>Today's Deals</div>
                   <div>Customer Service</div>
                   <div>Register</div>
                   <div>Gift Card</div>
                   <div>Sell</div>
                   

                                                              

        </div>
    </header>
  )
}

export default NavBar
