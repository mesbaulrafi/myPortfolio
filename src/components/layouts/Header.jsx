import React from 'react'
import Images from '../Images'
import Logo from '/src/assets/Logo.png'
import Conteinar from '../Conteinar'
import { FaAnglesRight } from "react-icons/fa6";




const Header = () => {
  return (
    <>
    <div className="bg-teal-600 py-5">
      <Conteinar>
      <div className="flex items-center justify-between">
          {/* Logo Part  */}
      <div className="">
        <Images imgSrc={Logo}/>
      </div>
      {/* Items  */}
      <div className="">
        <ul className='flex items-center gap-x-8'>
          <li className='text-base text-[#B6C2E4] hover:text-[#00BCD4] relative inline-block    
          after:content-[] 
          after:absolute 
          after:bottom-[-5px] 
          after:left-1/2 
          after:-translate-x-1/2 
          after:w-0 
          after:h-0.5
          after:bg-[#B6C2E4] 
          after:transition-all 
          after:duration-300 
          hover:after:w-full'>Home</li>
          <li className='text-base text-[#B6C2E4] hover:text-[#00BCD4] duration-300'>About</li>
          <li className='text-base text-[#B6C2E4] hover:text-[#00BCD4] duration-300'>Services</li>
          <li className='text-base text-[#B6C2E4] hover:text-[#00BCD4] duration-300'>Resume</li>
          <li className='text-base text-[#B6C2E4] hover:text-[#00BCD4] duration-300'>Projects</li>
          <li className='text-base text-[#B6C2E4] hover:text-[#00BCD4] duration-300'>Contact</li>
        </ul>
      </div>
      <div className="">
        <li className='flex items-center gap-x-2 text-[#00BCD4] font-semibold py-2 px-4 bg-white rounded-[3.2px]'>Hire Me <FaAnglesRight className='text-base '/></li>
      </div>
      </div>
      </Conteinar>
    </div>
    </>
  )
}

export default Header