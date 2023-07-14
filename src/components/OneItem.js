import React from 'react';

export default function OneItem({img,name,price,id}) {
  return (
      <>
        <div key={id} className='flex min-w-[215px] cursor-pointer flex-col gap-2 w-auto hover:border-slate-800 border-2 border-slate-400'>
            <img className=' w-full self-center  h-full' src={img} alt=''/>
            <h1 className='pl-3 text-[20px]'>{name}</h1>
            <div className='flex pl-3 pb-2 gap-1'>
                <p className='text-[22px] font-semibold pt-[1px]'>&#8377;</p>
                <span className='font-semibold text-2xl'>{price}</span>
            </div>
        </div>
      </>
  )
}
