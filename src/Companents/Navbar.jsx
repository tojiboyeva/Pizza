import React from 'react'

export default function Navbar() {
  return (
    <div>
<nav className='bg-[#1A0803]'>
    <div className='container max-auto flex justify-between items-center pt-[48px]'>
<h1 className='font-[800] text-[35px]  bg-[linear-gradient(90deg,#FE9C1C,#FF5D29)]
  bg-clip-text text-transparent '>pizzashop</h1>
        <div className='font-[400] text-[18px] text-[#A3A3A3] flex gap-[80px]'>
          <p>Home</p>  
          <p>Menu</p>  
          <p>Events</p>  
          <p>About us</p>  
        </div>
        <div>
<button className='font-[500] text-[18px] text-[#fff] px-[56px] py-[11px] bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29]  rounded-[100px] mr-[30px] '>Log in</button>
<button className=' px-[10px] py-[10px] bg-gradient-to-r from-[#FE9C1C] to-[#FF5D29] rounded-[100px]'>👜</button>
        </div>
    </div>
</nav>
    </div>
  )
}
