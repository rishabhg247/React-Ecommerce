import React,{ useRef } from 'react';
import { Link } from 'react-router-dom';
import OneItem from '../components/OneItem';
import allitems from '../data/allitems';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import './defaultStyles.css';


export default function TrendingSlider(props) {
  let ifReloadNeeded=props.addToCart;
  const sliderRef = useRef(null);
  const scrollToTop = () => {window.scrollTo({top: 0,behavior: 'smooth'})};
  const slideLeft = () => {
    if (sliderRef.current) {sliderRef.current.scrollBy({left: -235,behavior: 'smooth'})}
  };

  const slideRight = () => {
    if (sliderRef.current) {sliderRef.current.scrollBy({left: 235,behavior: 'smooth'})}
  };
  return (
    <div className='mt-9'>
        <div className='flex mb-4 justify-between'>
            <h1 className='text-2xl font-semibold'>{props.title}</h1>
            <div>
                <button title="scroll left" onClick={slideLeft} className='border-2 rounded-md border-black hover:text-white hover:bg-black text-4xl mr-2 font-semibold'><BsFillArrowLeftSquareFill/></button>
                <button  title="scroll right" onClick={slideRight} className='border-2 rounded-md border-black hover:text-white hover:bg-black text-4xl font-semibold'><BsFillArrowRightSquareFill/></button>
            </div>
        </div>
        <div  ref={sliderRef} id='slider' className='row-container  flex overflow-x-scroll overflow-y-hidden gap-5'>
          {ifReloadNeeded?
          allitems.map((i, I) => {
            return (
              <a key={I} href={`http://localhost:3000/categories/product/${i.id}`}>
                <div  onClick={scrollToTop}>
                <OneItem id={i.id} key={I} img={i.img} name={i.description} price={i.price} />
                </div>
              </a>
            )
          })
          :
          allitems.map((i, I) => {
            return (
              <Link key={I} to={`/categories/product/${i.id}`}>
                <div  onClick={scrollToTop}>
                <OneItem id={i.id} key={I} img={i.img} name={i.description} price={i.price} />
                </div>
              </Link>
            )
          })
          }
          
        </div>
    </div>
  )
}
