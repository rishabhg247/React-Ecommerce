import React from 'react';
import img2 from '../images/bannerImgs/banner2.jpg';
import { Link } from 'react-router-dom';

export default function Banner2() {
  const scrollToTop = () => {window.scrollTo({top: 0,behavior: 'auto'})};

  return (
    <div className='grid my-16 grid-cols-2 place-items-center'>
        <img alt='banner1' className='h-[350px] w-[583px] object-cover object-center' src={img2}/>
        <div className='h-[350px] w-[583px] bg-gray-200'>
            <div className='flex mx-auto py-28  flex-col gap-3 w-4/6'>
            <h1 className='text-3xl font-semibold'>Comfortable & Elegante Living</h1>
            <h1 className='text-lg font-medium'>RISHMART Products are all made to standard sizes so that you can mix and match them freely.</h1>
            <Link  to='categories'>
              <button onClick={()=>{scrollToTop()}} className='text-white w-2/6 bg-black text-base font-bold px-4 py-2'>
                SHOP NOW
              </button>
            </Link>
            </div>
        </div>
    </div>
  )
}
