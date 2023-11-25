import React from 'react'
import img from "../../photo/home-pic1.jpg"

export default function TopMain() {
  return (
    <>
        <div className='md:flex-row flex-col-reverse flex w-10/12 mt-10 mx-auto justify-between items-center'>
            <div className='w-full'>
                <h1 className='xl:text-5xl font-MorabbaBold pb-3 lg:text-3xl'>مرکز خرید متنوع ترین <span className='text-yellow-300'>محصولات دکوری و تزیینی</span></h1>
                <p className='leading-[35px] my-5 2xl:text-[16px] lg:text-[14px] md:text-[12px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
                <div className='flex gap-10'>
                    <button>اطلاعات بیشتر</button>
                    <button className='btn'>بزن بریم</button>
                </div>
            </div>    
            <div className='bg-[#CBDAD2] xl:w-[100%] md:mb-0 mb-10 lg:w-[75%] md:w-[50%] w-full'><img className='w-[50rem]' src={img} alt="" style={{'clipPath':'polygon(31% 0%, 97% 71%, 60% 90%, 15% 83%, 0 59%, 3% 28%)'}}/></div>
        </div>
    </>
  )
}
