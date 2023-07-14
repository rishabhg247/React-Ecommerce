import React,{useState} from 'react';
import allitems from '../data/allitems';
import OneItem from '../components/OneItem';
import { Link } from 'react-router-dom';


export default function CategoryPage() {
    const[currArr,setCurrArr]=useState(allitems);
    const[currArrName,setCurrArrName]=useState("All")
    function arrFilter(data){
        if(data==="All"){setCurrArr(allitems);setCurrArrName("ALL")}
        else{
            let tempArr=allitems.filter((i)=>{return i.category===data});
            let name=data.toUpperCase();
            setCurrArr(tempArr);setCurrArrName(name);
        }}
    const scrollToTop = () => {window.scrollTo({top: 0,behavior: 'smooth'})};

    
  return (
    <div  className='w-[85vw] pt-20 pb-12 mx-auto'>
        <section className='flex my-12 flex-col gap-5'>
            <h1 className='text-2xl self-center font-bold'>{currArrName}</h1>
            <div className='self-center flex gap-2'>
                <button onClick={()=>arrFilter("All")} className='text-md hover:border-slate-900 hover:scale-105 font-medium border-2 border-slate-400 px-2 py-0.5'>All</button>
                <button onClick={()=>arrFilter("Furnitures")} className='text-md hover:border-slate-900 hover:scale-105 font-medium border-2 border-slate-400 px-2 py-0.5'>Furnitures</button>
                <button onClick={()=>arrFilter("Electronics")} className='text-md hover:border-slate-900 hover:scale-105 font-medium border-2 border-slate-400 px-2 py-0.5'>Electronics</button>
                <button onClick={()=>arrFilter("Lamp")} className='text-md hover:border-slate-900 hover:scale-105 font-medium border-2 border-slate-400 px-2 py-0.5'>Lamps</button>
                <button onClick={()=>arrFilter("Kitchen")} className='text-md hover:border-slate-900 hover:scale-105 font-medium border-2 border-slate-400 px-2 py-0.5'>Kitchen</button>
                <button onClick={()=>arrFilter("Chairs")} className='text-md hover:border-slate-900 hover:scale-105 font-medium border-2 border-slate-400 px-2 py-0.5'>Chairs</button>
                <button onClick={()=>arrFilter("Skin-Care")} className='text-md hover:border-slate-900 hover:scale-105 font-medium border-2 border-slate-400 px-2 py-0.5'>Skin Care</button>
            </div>
        </section>
        <section>
            <div className='grid mb-6 grid-cols-2 md:grid-cols-4 place-items-center gap-4 '>
            {currArr.map((i, I) => {
                return (
                <Link to={`/categories/product/${i.id}`}>
                <div  onClick={scrollToTop}>
                <OneItem key={I} img={i.img} name={i.description} price={i.price} />
                </div>
                </Link>
                )
            })}
            </div>
        </section>
    </div>
  )
}
