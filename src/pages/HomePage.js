import React from 'react';
import { Link } from 'react-router-dom';
import CategoryGrid from '../components/CategoryGrid'
import OneItem from '../components/OneItem'
import allitems from '../data/allitems'
import Banner1 from '../components/Banner1'
import TrendingSlider from '../components/TrendingSlider'
import Banner2 from '../components/Banner2';
import Cart from '../components/Cart';
export default function HomePage() {
  let newArr = allitems.slice(4, 12);
  const scrollToTop = () => {window.scrollTo({top: 0,behavior: 'smooth'})};
  return (
      <div className='w-[85vw] mx-auto'>
        <CategoryGrid />
        <h1 className='my-8  text-2xl font-semibold'>Products we are proud of</h1>
        <div className='grid mb-6 grid-cols-2 md:grid-cols-4 place-items-center gap-4 '>
          {newArr.map((i, I) => {
            return (
              <Link key={I} to={`/categories/product/${i.id}`}>
                <div  onClick={scrollToTop}>
                <OneItem key={I} img={i.img} name={i.description} price={i.price} />
                </div>
              </Link>
            )
          })}
        </div>
        <Banner1/>
        <TrendingSlider addToCart={false} title='Trending Now'/>
        <Banner2/>
      </div>
  )
}
export const ComponentB = () => {
  return (
    <div className="overlay-component">
      <Cart/>
    </div>
  );
};
