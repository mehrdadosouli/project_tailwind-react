import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import logo from "../../photo/logo-icon.png"
import { FaHome,FaShoppingCart } from "react-icons/fa";
import { LuNewspaper,LuContact } from "react-icons/lu";
import { IoInformationCircle   } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { LiaSearchSolid } from "react-icons/lia";
import Hamburger from "./Hamburger"
import {Link} from 'react-router-dom'
export default function Header() {
    // const [categories, setCategories] = useState({
    //     "الکترونیک": {
    //       "موبایل و تبلت": ["گوشی موبایل", "تبلت", "لوازم جانبی موبایل و تبلت"],
    //       "کالای دیجیتال": ["لپ تاپ", "دوربین", "تلویزیون", "کامپیوتر و تجهیزات جانبی", "بازی‌های رایانه‌ای", "محصولات مرتبط با چاپ", "محصولات مرتبط با شبکه"],
    //       "لوازم خانگی": ["لوازم برقی خانگی", "آشپزخانه", "تهویه مطبوع", "تلویزیون و سینمای خانگی", "لوازم تحریر و اداری", "ساعت و ساعت دیواری", "لوازم خودرو"],
    //       "فرهنگ و هنر": ["کتاب", "موسیقی", "فیلم و سریال", "نرم افزار و بازی", "کتاب صوتی", "پادکست", "اسباب بازی و هنر"],
    //       "پوشاک و اکسسوری": ["پوشاک مردانه", "پوشاک زنانه", "پوشاک بچگانه", "کفش و کیف", "لوازم آرایشی و بهداشتی", "عطر و ادکلن", "جواهرات و ساعت", "عینک"],
    //       "ورزش و سفر": ["ورزش و تناسب اندام", "کوهنوردی و شکار", "کمپینگ و شکار", "شنا و دوچرخه‌سواری", "اسب‌سواری و تجهیزات"]
    //     },
    //     "خانه": {
    //       "موبایل و تبلت": ["گوشی موبایل", "تبلت", "لوازم جانبی موبایل و تبلت"],
    //       "کالای دیجیتال": ["لپ تاپ", "دوربین", "تلویزیون", "کامپیوتر و تجهیزات جانبی", "بازی‌های رایانه‌ای", "محصولات مرتبط با چاپ", "محصولات مرتبط با شبکه"],
    //       "لوازم خانگی": ["لوازم برقی خانگی", "آشپزخانه", "تهویه مطبوع", "تلویزیون و سینمای خانگی", "لوازم تحریر و اداری", "ساعت و ساعت دیواری", "لوازم خودرو"],
    //       "فرهنگ و هنر": ["کتاب", "موسیقی", "فیلم و سریال", "نرم افزار و بازی", "کتاب صوتی", "پادکست", "اسباب بازی و هنر"],
    //       "پوشاک و اکسسوری": ["پوشاک مردانه", "پوشاک زنانه", "پوشاک بچگانه", "کفش و کیف", "لوازم آرایشی و بهداشتی", "عطر و ادکلن", "جواهرات و ساعت", "عینک"],
    //       "ورزش و سفر": ["ورزش و تناسب اندام", "کوهنوردی و شکار", "کمپینگ و شکار", "شنا و دوچرخه‌سواری", "اسب‌سواری و تجهیزات"]
    //     }
    //   });
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
    {
      show ? 
        <div className='h-32 w-10/12 mt-10 bg-menu mx-auto rounded-3xl items-center justify-between flex px-10'>
            <div className="flex items-center">
              <img src={logo} className='w-72 ' alt="" />
              <ul className='flex xl:gap-14 gap-2 xl:mr-20 mr-5'>
                <li className='flex items-center gap-2 text-3xl'><FaHome className='text-gray-500'/><Link to="/">خانه</Link></li>
                <li className='flex items-center gap-2 text-3xl'><FaShoppingCart className='text-gray-500'/><Link to="/فروشگاه">فروشگاه</Link></li>
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
    </>
  )
}
