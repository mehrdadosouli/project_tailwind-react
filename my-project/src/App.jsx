import React,{useState,useEffect} from "react";
import {Routes,Route} from 'react-router-dom'
import Shopping from './components/shopping/Shopping'
import Main from "./components/Main";

import logo from "./photo/logo-icon.png"
import { FaHome,FaShoppingCart } from "react-icons/fa";
import { LuNewspaper,LuContact } from "react-icons/lu";
import { IoInformationCircle   } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { LiaSearchSolid } from "react-icons/lia";
import Hamburger from "./components/header/Hamburger"
import {Link} from 'react-router-dom'
function App() {
  const [show,setSHow]=useState(true)
useEffect(()=>{
  if(window.innerWidth > '992'){
    setSHow(true)
  }else{
    setSHow(false)
  }
  window.addEventListener('resize',(e)=>{
    if(window.innerWidth > '992'){
      setSHow(true)
    }else{
      setSHow(false)
    }
  })
},[])

  return (
    <>
    
      <div className="w-full h-full bg-base">
      {
      show ? 
        <div className='h-32 w-10/12 mt-10 bg-menu mx-auto rounded-3xl items-center justify-between flex px-10'>
            <div className="flex items-center">
              <img src={logo} className='w-72 ' alt="" />
              <ul className='flex xl:gap-14 gap-2 xl:mr-20 mr-5'>
                <li className='flex items-center gap-2 text-3xl'><FaHome className='text-gray-500'/><Link to="/">خانه</Link></li>
                <li className='flex items-center gap-2 text-3xl'><FaShoppingCart className='text-gray-500'/><Link to="/shopping">فروشگاه</Link></li>
                <li className='flex items-center gap-2 text-3xl'><LuNewspaper className='text-gray-500'/><Link to="/وبلاگ">وبلاگ</Link></li>
                <li className='flex items-center gap-2 text-3xl'><IoInformationCircle className='text-gray-500'/><Link to="/درباره ما">درباره ما</Link></li>
                <li className='flex items-center gap-2 text-3xl'><LuContact className='text-gray-500'/><Link to="/تماس با ما">تماس با ما</Link></li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link to='/سرچ'><LiaSearchSolid className='bg-green-site fill-white p-1 rounded-lg w-14 h-14'/></Link>
              <Link to='/سبد خرید'><SlBasket className='bg-green-site fill-white p-1 rounded-lg w-14 h-14'/></Link>
              <Link to='/درباره ما'><IoMdContact className='bg-green-site fill-white p-1 rounded-lg w-14 h-14'/></Link>
            </div>
        </div>
      :
        <Hamburger />
    }
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/وبلاگ" element={<Main />} />
          <Route path="/درباره ما" element={<Main />} />
          <Route path="/تماس با ما" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
