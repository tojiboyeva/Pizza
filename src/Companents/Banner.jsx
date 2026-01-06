import React from 'react'
import h1 from '../assets/H1.png'
import pizza1 from '../assets/Pizza1.png'
import pizza2 from '../assets/Pizza2.png'
export default function Banner() {
  return (
    <div>
        <header className='bg-[#1A0803]'>
      <div className='container max-auto flex justify-between '>
        <div>
<img className='pt-[120px] pb-[12px]' src={h1} alt="" />
<p className='font-[400] text-[20px] text-[#A3A3A3] w-[410px] pb-[23px]'>We will deliver juicy pizza for your family in 30 minutes, if the courier is late -<span className='text-[#fff]'> pizza is free!</span></p>
<div>
    <p className='font-[400] text-[20px] text-[#A3A3A3]'>Cooking process:</p>
    <img src={pizza2} alt="" />
</div>
<div className='flex gap-[20px] pt-[58px]'>
    <button className='font-[500] text-[22px] text-[#fff] px-[72px] py-[17px] bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29]  rounded-[100px]'>To order</button>
    <button className='font-[500] text-[18px] bg-[linear-gradient(90deg,#FE9C1C,#FF5D29)] bg-clip-text text-transparent px-[78px] py-[20px] border-[2px] rounded-[100px] border-[#FF6939]'>Pizza-Menu</button>
</div>
        </div>
        <div className='pt-[61px]'>
            <img src={pizza1} alt="" />
        </div>
      </div>
      </header>
    </div>
  )
}
