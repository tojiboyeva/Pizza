
import React from 'react'
import mpizza1 from '../assets/Minipizza1.png'
export default function Menu() {
    return (
        <div>
            <section className="bg-[#1A0803] min-h-screen">
                <div className="container mx-auto flex flex-col items-center">
                    <div>
                        <div className='flex flex-col items-center font-extrabold text-[70px] text-white pt-[120px]'>
                            <h1 className="">
                                Menu
                            </h1>
                        </div>
                        <div className='flex justify-center gap-12 mt-10 flex-wrap pt-[49px] pb-[150px]'>
                            <button className='font-[500] text-[20px] text-[#fff] px-[75px] py-[20px] bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29]  rounded-[100px]'>Show All</button>
                            <button className='font-[500] text-[22px] text-[#fff] px-[88px] py-[19px] bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29]  rounded-[100px]'>Meat</button>
                            <button className='font-[500] text-[20px] text-[#fff] px-[64px] py-[20px] bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29]  rounded-[100px]'>Vegetarian</button>
                            <button className='font-[500] text-[20px] text-[#fff] px-[54px] py-[20px] bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29]  rounded-[100px]'>Sea products</button>
                            <button className='font-[500] text-[22px] text-[#fff] px-[60px] py-[19px] bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29]  rounded-[100px]'>Mushroom</button>
                        </div>
                    </div>
<div className='flex gap-[22px] pb-[56px]'>
                    <div className="w-[297px] bg-[#2A1208] rounded-[30px] px-6 pt-20 pb-6 text-center relative">


                        <img
                            src={mpizza1}
                            alt="Pizza"
                            className="w-[160px] h-[160px] absolute -top-20 left-1/2 -translate-x-1/2"
                        />


                        <h3 className="text-white text-[20px] font-semibold mt-4">
                            Argentina
                        </h3>


                        <p className="text-[#B7AFA9] text-[12px] mt-2 leading-5">
                            Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
                        </p>


                        <div className="flex justify-center gap-3 mt-5">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm">
                                22
                            </span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                                28
                            </span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm ">
                                33
                            </span>
                        </div>
                        <button className='font-[400] text-[16px] bg-[linear-gradient(90deg,#FE9C1C,#FF5D29)] bg-clip-text text-transparent px-[50px] py-[11px] border-[2px] rounded-[100px] border-[#FF6939] mt-[20px]'>+ Ingridients</button>
                        <div className="flex justify-center items-center gap-6 mt-10">
                        <p className="text-white text-[18px] font-semibold">
                            7.35 $
                        </p>

                        <div className="flex items-center gap-2">
                            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm">
                                −
                            </button>

                            <span className="text-[20px] text-[#A3A3A3]">
                                1
                            </span>

                            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                                +
                            </button>
                        </div>

                    </div>



                    <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29] text-white text-sm font-medium">
                        Order Now
                    </button>
                </div>
                    <div className="w-[297px] bg-[#2A1208] rounded-[30px] px-6 pt-20 pb-6 text-center relative">


                        <img
                            src={mpizza1}
                            alt="Pizza"
                            className="w-[160px] h-[160px] absolute -top-20 left-1/2 -translate-x-1/2"
                        />


                        <h3 className="text-white text-[20px] font-semibold mt-4">
                            Argentina
                        </h3>


                        <p className="text-[#B7AFA9] text-[12px] mt-2 leading-5">
                            Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
                        </p>


                        <div className="flex justify-center gap-3 mt-5">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm">
                                22
                            </span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                                28
                            </span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm ">
                                33
                            </span>
                        </div>
                        <button className='font-[400] text-[16px] bg-[linear-gradient(90deg,#FE9C1C,#FF5D29)] bg-clip-text text-transparent px-[50px] py-[11px] border-[2px] rounded-[100px] border-[#FF6939] mt-[20px]'>+ Ingridients</button>
                        <div className="flex justify-center items-center gap-6 mt-10">
                        <p className="text-white text-[18px] font-semibold">
                            7.35 $
                        </p>

                        <div className="flex items-center gap-2">
                            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm">
                                −
                            </button>

                            <span className="text-[20px] text-[#A3A3A3]">
                                1
                            </span>

                            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                                +
                            </button>
                        </div>

                    </div>



                    <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29] text-white text-sm font-medium">
                        Order Now
                    </button>
                </div>
                    <div className="w-[297px] bg-[#2A1208] rounded-[30px] px-6 pt-20 pb-6 text-center relative">


                        <img
                            src={mpizza1}
                            alt="Pizza"
                            className="w-[160px] h-[160px] absolute -top-20 left-1/2 -translate-x-1/2"
                        />


                        <h3 className="text-white text-[20px] font-semibold mt-4">
                            Argentina
                        </h3>


                        <p className="text-[#B7AFA9] text-[12px] mt-2 leading-5">
                            Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
                        </p>


                        <div className="flex justify-center gap-3 mt-5">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm">
                                22
                            </span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                                28
                            </span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm ">
                                33
                            </span>
                        </div>
                        <button className='font-[400] text-[16px] bg-[linear-gradient(90deg,#FE9C1C,#FF5D29)] bg-clip-text text-transparent px-[50px] py-[11px] border-[2px] rounded-[100px] border-[#FF6939] mt-[20px]'>+ Ingridients</button>
                        <div className="flex justify-center items-center gap-6 mt-10">
                        <p className="text-white text-[18px] font-semibold">
                            7.35 $
                        </p>

                        <div className="flex items-center gap-2">
                            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm">
                                −
                            </button>

                            <span className="text-[20px] text-[#A3A3A3]">
                                1
                            </span>

                            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                                +
                            </button>
                        </div>

                    </div>



                    <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29] text-white text-sm font-medium">
                        Order Now
                    </button>
                </div>
                    <div className="w-[297px] bg-[#2A1208] rounded-[30px] px-6 pt-20 pb-6 text-center relative">


                        <img
                            src={mpizza1}
                            alt="Pizza"
                            className="w-[160px] h-[160px] absolute -top-20 left-1/2 -translate-x-1/2"
                        />


                        <h3 className="text-white text-[20px] font-semibold mt-4">
                            Argentina
                        </h3>


                        <p className="text-[#B7AFA9] text-[12px] mt-2 leading-5">
                            Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...
                        </p>


                        <div className="flex justify-center gap-3 mt-5">
                            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm">
                                22
                            </span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                                28
                            </span>
                            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm ">
                                33
                            </span>
                        </div>
                        <button className='font-[400] text-[16px] bg-[linear-gradient(90deg,#FE9C1C,#FF5D29)] bg-clip-text text-transparent px-[50px] py-[11px] border-[2px] rounded-[100px] border-[#FF6939] mt-[20px]'>+ Ingridients</button>
                        <div className="flex justify-center items-center gap-6 mt-10">
                        <p className="text-white text-[18px] font-semibold">
                            7.35 $
                        </p>

                        <div className="flex items-center gap-2">
                            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full border border-[#A3A3A3] text-[#A3A3A3] text-sm">
                                −
                            </button>

                            <span className="text-[20px] text-[#A3A3A3]">
                                1
                            </span>

                            <button className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#FF8A00] text-white text-sm">
                                +
                            </button>
                        </div>

                    </div>



                    <button className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29] text-white text-sm font-medium">
                        Order Now
                    </button>
                </div>
                </div>
        </div>
            </section >
        </div >
    )
}
