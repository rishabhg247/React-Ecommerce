import React from 'react';
import Main1 from "../images/categoryGirdImgs/grid1.jpg";
import Main2 from "../images/categoryGirdImgs/grid2.webp";
import Main3 from "../images/categoryGirdImgs/grid3.jpg";
import Main4 from "../images/categoryGirdImgs/grid4.jpeg";
export default function CategoryGrid() {
    return (
        <div className="pt-24 pb-12">
            <div>
                <div className="grid w-[85vw] h-[80vh] mx-auto grid-cols-2 md:grid-cols-4 gap-1 md:gap-3">
                    <div className="overflow-hidden relative cursor-pointer col-span-2 row-span-2 ">
                        <div>
                            <div id="img1" className="absolute bg-black w-full h-full top-0 left-0 bg-opacity-20 hover:bg-opacity-40"></div>
                            <img src={Main1} alt="img1" className="object-cover h-full w-full" />
                            <p className="absolute bottom-7 left-7 text-white text-3xl tracking-wide font-bold">Live Comfortably</p>
                        </div>
                    </div>
                    <div className="overflow-hidden relative cursor-pointer  row-span-2">
                        <div>
                            <div id="img2" className="absolute bg-black inset-0 bg-opacity-30 hover:bg-opacity-50"></div>
                            <img src={Main2} alt="img2" className=" pt-20 object-cover h-full w-full" />
                            <p className="absolute bottom-7 left-7 text-white text-3xl font-bold tracking-wide">Skincare</p>
                        </div>
                    </div>
                    <div className="overflow-hidden relative cursor-pointer ">
                        <div>
                            <div id="img3" className="absolute bg-black inset-0  bg-opacity-30 hover:bg-opacity-50"></div>
                            <img src={Main3} alt="img3" className=" h-[250px] w-full" />
                            <p className="absolute bottom-7 left-7 text-white text-3xl font-bold tracking-wide">Kitchen</p>
                        </div>
                    </div>
                    <div className="overflow-hidden relative cursor-pointer">
                        <div >
                            <div id="img4" className="absolute bg-black inset-0 bg-opacity-30 hover:bg-opacity-50"></div>
                            <img src={Main4} alt="img4" className=" h-[250px] w-full" />
                            <p className="absolute bottom-7 left-7 text-white text-3xl font-bold tracking-wide">Electronics</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
