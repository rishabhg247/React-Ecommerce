import React from 'react';

export default function Footer() {
    return (
        <div>
            <div className="bg-zinc-900 h-60 flex flex-col gap-5 justify-center items-center">
                <h2 className="text-white text-center font-bold text-3xl">Newsletter</h2>
                <form className="flex items-center">
                    <input  type="email" placeholder="your@email.com" className="text-base w-60 px-2 py-0.5 mr-1 border border-gray-300" />
                    <button type="submit" className="text-base font-semibold px-2 py-0.5 border border-gray-300 bg-white text-gray-900 cursor-pointer hover:scale-105 ">Subscribe</button>
                </form>
            </div>
            <div className="bg-black h-40 flex flex-col gap-3 justify-center items-center">
                <div className='flex gap-5 justify-center'>
                    <h1 className='cursor-pointer text-white border-b border-black hover:border-white font-semibold'>About</h1>
                    <h1 className='cursor-pointer text-white border-b border-black hover:border-white  font-semibold'>Store locater</h1>
                    <h1 className='cursor-pointer text-white border-b border-black hover:border-white  font-semibold'>FAQs</h1>
                    <h1 className='cursor-pointer text-white border-b border-black hover:border-white  font-semibold'>News</h1>
                    <h1 className='cursor-pointer text-white border-b border-black hover:border-white  font-semibold'>Careers</h1>
                    <h1 className='cursor-pointer text-white border-b border-black hover:border-white  font-semibold'>Contact Us</h1>
                </div>
                <h1 className='self-center text-white font-semibold'>
                   Designed by Rishabh_Gupta
                </h1>
            </div>
        </div>
    )
}
