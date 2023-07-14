import React,{useState ,createContext, useContext,} from 'react';
import allitems from '../data/allitems'
import { useParams } from "react-router";
import TrendingSlider from '../components/TrendingSlider'

export const CartContext = createContext();
export default function ProductPage() {
    const { id } = useParams();
    const item = allitems.filter((i) => i.id === parseInt(id));
    const [image, setImage] = useState(item[0].img);
    const [quantity, setQuantity] = useState(1);
    const changeImage = (e) => {setImage(e.target.src)};
    const increase = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const decrease = () => {if (quantity>1){setQuantity((prevQuantity)=>prevQuantity-1)}};    
    const calcPrice = (quantity) => {return quantity * item[0].price};
    const { addToCart,toggleCart } = useContext(CartContext);
    function createCart(product,quantity){
        let itemObj={id:product.id,name:product.description,image:product.img,amount:product.price,quantity};
        addToCart(itemObj)
    }
    return (
        <div className='w-[85vw] mx-auto'>
            <div>
                    <div className="mt-20 mb-16">
                        <div>
                            <div className="mb-12  w-full flex relative">
                                <h3 className="absolute rounded-sm px-2 text-4xl font-bold top-5 left-[37%]">{item[0].description}
                                </h3>
                                <div className="w-1/2 h-full pt-20">
                                    <div className="w-full h-auto flex justify-center items-center ml-4">
                                        <img src={image} alt="product" className="w-3/4 max-h-[435.5px] shadow-xl rounded-md h-full object-cover" />
                                    </div>
                                    <div className="w-full flex gap-3 justify-center items-center p-3">
                                        <img
                                            onMouseOver={changeImage} src={item[0].img} alt="product"
                                            className="w-[70px] h-[70px] border-2 border-slate-500 rounded-md object-cover cursor-pointer"
                                        />
                                        <img
                                            onMouseOver={changeImage} src={item[0].otherImgs[0]} alt="product"
                                            className="w-[70px] h-[70px] border-2 border-slate-500 rounded-md object-cover cursor-pointer"
                                        />
                                        <img onMouseOver={changeImage} src={item[0].otherImgs[1]} alt="product"
                                            className="w-[70px] h-[70px] border-2 border-slate-500 rounded-md object-cover cursor-pointer"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 min-h-[82vh] bg-zinc-200 pt-32 pb-10 px-20">
                                    <p className="text-[20px] mb-10 leading-relaxed">{item[0].specs}</p>
                                    <div className="flex justify-between text-2xl mb-6 font-semibold items-center">
                                        <p>Quantity</p>
                                        <div className="flex border border-black">
                                            <button onClick={decrease} className="w-14 h-10 text-black cursor-pointer bg-white outline-none focus:outline-none">
                                                -
                                            </button>
                                            <p className="quantity w-14 h-9 self-center text-center pr-1">{quantity}</p>
                                            <button onClick={increase} className="w-14 h-10 text-black cursor-pointer bg-white outline-none focus:outline-none">
                                                +
                                            </button>
                                        </div>
                                        <div className='flex gap-1'>
                                        <p className='text-[20px] pt-[1px]'>&#8377;</p>
                                        <span className=''>{calcPrice(quantity)}.00</span>
                                        </div>
                                    </div>
                                    <div className="flex my-auto gap-6">
                                        <button onClick={() => {createCart(item[0],quantity)}}
                                            className="transition duration-300 ease-out border-2 border-black text-xl w-[50%] py-2 font-semibold uppercase hover:bg-black hover:text-white">
                                            add to cart</button>
                                        <button onClick={() => {createCart(item[0],quantity);toggleCart(true)}} className="transition duration-300 ease-out bg-[#1877F2] text-white text-xl font-semibold w-[50%] py-2 border-2 border-[#1877F2] uppercase hover:bg-transparent hover:text-[#1877F2]">
                                            buy now
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="specifications flex gap-12">
                                <div className="spec bg-gray-300 w-1/3 flex flex-col justify-between p-8">
                                    <p className="spec-title text-2xl font-semibold">Texture:</p>
                                    <p className="title-desc text-xl">{item[0].texture}</p>
                                </div>
                                <div className="spec bg-gray-300 w-1/3 flex flex-col justify-between p-8">
                                    <p className="spec-title text-2xl font-semibold">Weight:</p>
                                    <p className="title-desc text-xl">{item[0].weight}</p>
                                </div>
                                <div className="spec bg-gray-300 w-1/3 flex flex-col justify-between p-8">
                                    <p className="spec-title text-2xl font-semibold">Size:</p>
                                    <p className="title-desc text-xl">{item[0].size}</p>
                                </div>
                            </div>
                        </div>
                        <TrendingSlider addToCart={true} title='You might also like'/>
                    </div>
            </div>
        </div>
    )
}
