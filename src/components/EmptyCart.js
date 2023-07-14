import React,{useContext} from 'react';
import { CartContext } from "../pages/ProductPage";
import cartImg from '../images/emptyCart.png'

export default function Cart() {
    const {toggleCart} = useContext(CartContext);

  return (
        <div className='h-screen flex flex-col p-6 bg-white w-full'>
            <div className='flex justify-between'>
                <h1 className='text-black font-bold text-2xl'>Your Shopping Cart</h1>
                <span onClick={()=>{toggleCart(false)}} className='text-black cursor-pointer font-bold text-2xl'>X</span>
            </div>
            {/* //---------------------------------- */}
            <div className='flex absolute top-[22%] left-[27%] flex-col gap-4 justify-center items-center'>
                <img className='w-[200px]' src={cartImg} alt='cartImg'/>
                <h1 className='text-xl font-semibold'>Your cart is empty</h1>
                <button onClick={()=>{toggleCart(false)}} className='text-lg font-base px-4 py-1 border border-slate-700 rounded-sm bg-zinc-200'>Keep Browsing</button>
            </div>

        </div>
  )
}
