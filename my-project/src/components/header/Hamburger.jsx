import React, { useState } from 'react'
import { SlBasket } from "react-icons/sl";
import { LiaSearchSolid } from "react-icons/lia";
import { FaHome,FaShoppingCart } from "react-icons/fa";
import { LuNewspaper,LuContact } from "react-icons/lu";
import { IoInformationCircle   } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import logo from "../../photo/logo-icon.png"
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'

export default function Hamburger() {
    const [isShow,setIsshow]=useState(false)
    const clickHandler=()=>{
        setIsshow(!isShow)
    }
  return (
    <div className='h-32 w-10/12 mt-10 bg-menu mx-auto rounded-3xl items-center justify-between flex px-10' >
        <button onClick={clickHandler}><GiHamburgerMenu /></button>
        <img src={logo} className='w-72' alt="" />
        <div className="flex gap-4">
              <Link to='/سرچ'><LiaSearchSolid className='bg-green-site fill-white p-1 rounded-lg w-10 h-10'/></Link>
              <Link to='/سبد خرید'><SlBasket className='bg-green-site fill-white p-1 rounded-lg w-10 h-10'/></Link>
              <Link to='/درباره ما'><IoMdContact className='bg-green-site fill-white p-1 rounded-lg w-10 h-10'/></Link>
        </div>
            {isShow && 
            <div className='absolute right-32 top-32 w-[250px] h-[250px] bg-[#858f8a] z-10 flex items-center pr-6 text-yellow-50'>
              <ul className='flex flex-col gap-8 [&>*]:gap-5 [&>*]:flex [&>*]:items-center [&>*]:text-3xl [&>*]:shadow-md w-[85%]'>
                <li className='flex gap-2 text-3xl'><FaHome className='text-gray-300'/><Link to="/">خانه</Link></li>
                <li><FaShoppingCart className='text-gray-300'/><Link to="/فروشگاه">فروشگاه</Link></li>
                <li><LuNewspaper className='text-gray-300'/><Link to="/وبلاگ">وبلاگ</Link></li>
                <li><IoInformationCircle className='text-gray-300'/><Link to="/درباره ما">درباره ما</Link></li>
                <li><LuContact className='text-gray-300'/><Link to="/تماس با ما">تماس با ما</Link></li>
              </ul>    
            </div>
            }
    </div>
  )
}
