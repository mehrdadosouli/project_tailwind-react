import React, { useState } from 'react'
import styles from "./header.module.css"
import logo from "../../photo/logo-icon.png"
import { FaHome,FaShoppingCart } from "react-icons/fa";
import { LuNewspaper,LuContact } from "react-icons/lu";
import { IoInformationCircle   } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { LiaSearchSolid } from "react-icons/lia";

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

  

  return (
    <>
        <div className='h-24 w-11/12 mt-5 bg-menu mx-auto rounded-3xl items-center justify-between flex px-10'>
            <div className="flex items-center">
              <img src={logo} className='w-48 ' alt="" />
              <ul className='flex gap-8 mr-10'>
                <li className='flex items-center gap-2 '><FaHome className='text-gray-500'/><Link to="/">خانه</Link></li>
                <li className='flex items-center gap-2'><FaShoppingCart className='text-gray-500'/><Link to="/فروشگاه">فروشگاه</Link></li>
                <li className='flex items-center gap-2'><LuNewspaper className='text-gray-500'/><Link to="/وبلاگ">وبلاگ</Link></li>
                <li className='flex items-center gap-2'><IoInformationCircle className='text-gray-500'/><Link to="/درباره ما">درباره ما</Link></li>
                <li className='flex items-center gap-2'><LuContact className='text-gray-500'/><Link to="/تماس با ما">تماس با ما</Link></li>
              </ul>
            </div>
            <div className="flex gap-8">
              <Link to='/سرچ'><LiaSearchSolid className='text-3xl'/></Link>
              <Link to='/سبد خرید'><SlBasket className='text-3xl'/></Link>
              <Link to='/درباره ما'><IoMdContact className='text-3xl'/></Link>
            </div>
        </div>
    </>
  )
}
