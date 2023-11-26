import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'

export default function Category() {
  return (
    <>
    <div className='flex gap-5 py-8 w-10/12 lg:w-[64%] xl:w-[50%] mr-[9%] my-10 lg:[&>*]:p-8 [&>*]:p-4 flex-wrap [&>*]:rounded-2xl [&>*]:bg-white bg-[#F5F9FF] justify-center'>
        <Link to='/vall'>دیوار کوب</Link>
        <Link to='/choob'>لوازم چوبی</Link>
        <Link to='/kitchen'>لوازم آشپزخانه</Link>
        <Link to='/desk'>میز و کنسول</Link>
        <Link to='/dekor'>شلف و دکور</Link>
    </div>
    
    </>
  )
}
