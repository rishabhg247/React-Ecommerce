import React,{useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { HiShoppingCart } from "react-icons/hi2";
import { CartContext } from "../pages/ProductPage";
import Cart from './Cart';
import EmptyCart from './EmptyCart';
import './defaultStyles.css'


export default function NavBar() {
  const {toggleCart, isCartOpen, cartItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if(cartItem.length===0){setQuantity(0)}
    else if(cartItem.length>0){
      let result=0;
      for(let i of cartItem){result+=i.quantity}
      setQuantity(result);
    }
    if(isCartOpen===true){document.body.classList.add('disable-scroll')}
    else if(isCartOpen===false){document.body.classList.remove('disable-scroll')}
  }, [cartItem,quantity,isCartOpen]);
  const scrollToTop = (val) => {
    if(val===true){window.scrollTo({top: 0,behavior: 'auto'})}
    else{window.scrollTo({top: 0,behavior: 'smooth'})}
  };
    return (
    <>
     {/* overlay */}
      <div onClick={()=>{toggleCart(false)}}
        className={`absolute top-0 left-0 w-full h-full bg-[#00000075] overlay ${isCartOpen ? "flex" : "hidden"}`}>
      </div>
      {/* cart */}
    <div className={`flex flex-col imp absolute top-0 right-0 h-screen w-[460px] ${isCartOpen ? 'right-0' : "hidden"}`}>
        <div className="h-full">
          {cartItem.length < 1 ? (<EmptyCart/>) : (<Cart />)}
        </div>
    </div>
    {/* Nav bar */}

      <div>
        <nav className="shadow fixed bg-white top-0 w-full z-20">
          <div className="flex justify-between items-center px-7">
            <div className='bg-black my-0.5 cursor-pointer flex w-14 rounded-full h-14'>
              <Link to='/' ><h1  onClick={scrollToTop} className='flex gap-[3px] text-black border-b-2 border-white tracking-wide font-bold text-lg font-mono pl-0.5 pt-3'><span className='text-white'>RishM</span>art</h1></Link>
            </div>
            <div className="flex gap-8">
              <Link to='/'><div onClick={()=>{scrollToTop(false)}} 
              className='text-2xl'>HOME</div></Link>
              <Link to='/categories'><div onClick={()=>{scrollToTop(false)}} className='text-2xl'>CATEGORIES</div></Link>
              <div  onClick={()=>{toggleCart(true);scrollToTop(true)}}  className='flex cursor-pointer relative'>
                <HiShoppingCart className=' self-center text-2xl'/>
                {quantity>0?
                <h1 className='absolute font-sans bg-[#1877F2] text-white z-10 font-semibold left-3 bottom-5 border-2 border-slate-600 text-xs px-1 self-center rounded-full'>{quantity}</h1>
                :null}
              </div>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}
