import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from "../pages/ProductPage";
import EmptyCart from './EmptyCart';

export default function Cart() {
    const { cartItem, toggleCart } = useContext(CartContext);
    const [total,setTotal]=useState(null);

    //temp and q is used to activate useEffect to update real time data whenever any click happens..
    const [temp, setTemp] = useState(true)
    const [q, setQ] = useState(0)

    function alterQuantity(item, action) {
        if (action == "incr") { cartItem.forEach((i) => { if (i.id === item.id) { item.quantity += 1 }; setQ(q + 1) }) }
        else if (action == "decr") {
            if (item.quantity > 1) {
                cartItem.forEach((i) => { if (i.id === item.id) { item.quantity -= 1 }; setQ(q - 1) })
            }
        }
    }
    function calctotal(){
        if(cartItem.length>0){
        let result=0;
        for(let i of cartItem){result+=i.amount*i.quantity};
        setTotal(result)}
    }
    function removeItem(index) { cartItem.splice(index, 1); setTemp(!temp) }
    useEffect(() => {calctotal()}, [q,cartItem,temp])
    return (
        <>
            {cartItem.length > 0 ?
                <div className='h-screen grid px-6 grid-rows-6 bg-white w-full'>
                    <div className='flex self-center justify-between'>
                        <h1 className='text-black font-bold text-xl'>Your Shopping Cart  {"("} {cartItem.length} {")"}</h1>
                        <span onClick={() => { toggleCart(false) }} className='text-black cursor-pointer font-bold text-2xl'>X</span>
                    </div>
                    {/* //---------------------------------- */}
                    <div className='overflow-auto row-span-4'>
                        {cartItem.length > 0 ?
                            cartItem.map((i, I) => {
                                return (
                                    <div key={I} className='flex mb-2 border border-black'>
                                        <div className='w-2/6 max-h-[110px]'><img alt='productImg' className='w-full h-full object-cover' src={i.image} /></div>
                                        <div className='w-4/6 flex mr-1 truncate flex-col gap-5 my-2'>
                                            <h1 className='text-[22px] font-semibold truncate '>{i.name}</h1>
                                            <div className="flex">
                                                <button onClick={() => { alterQuantity(i, "decr") }} className="w-8 h-8 self-center text-white bg-black">-</button>
                                                <p className="quantity text-[20px] w-8 h-8 border border-black text-center">{i.quantity}</p>
                                                <button onClick={() => { alterQuantity(i, "incr") }} className="w-8 h-8  text-white bg-black">+</button>
                                            </div>
                                        </div>
                                        <div className='w-1/6 flex flex-col gap-5 mr-2 py-2'>
                                            <div className='flex self-end gap-1'>
                                            <p className='text-[20px] font-semibold pt-0.5'>&#8377;</p>
                                            <h2 className='text-[22px]  font-semibold '>{i.amount}.00</h2>
                                            </div>
                                            <button title='Remove Item' onClick={() => { removeItem(I) }} className='pr-3 hover:text-red-400 text-[22px] self-end font-bold'>X</button>
                                        </div>
                                    </div>
                                )
                            })
                            : null
                        }
                    </div>
                    {/* //---------------------------------- */}
                    <div className='flex self-center border-t-2 pt-2 border-black border-dashed  justify-between'>
                        <div>
                            <h1 className='text-black font-semibold text-2xl mb-1' >Subtotal</h1>
                            <div className='flex gap-1'>
                            <p className='text-[20px] font-semibold pt-0.5'>&#8377;</p>
                            <h1 className='text-black font-semibold text-2xl'>{total}.00</h1>
                            </div>
                        </div>
                        <div className='self-center'>
                            <button className='text-slate-800 transition duration-300 ease-in-out hover:text-white hover:bg-black font-semibold text-2xl px-6 py-1 border-black border-2 '>Proceed to Checkout</button>
                        </div>
                    </div>

                </div>
                :
                <EmptyCart />
            }
        </>
    )
}
