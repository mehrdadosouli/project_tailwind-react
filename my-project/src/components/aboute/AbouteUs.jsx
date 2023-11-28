import React from 'react'
export default function AbouteUs() {
  return (
    <>
        <div className='md:flex-row flex-col-reverse flex w-10/12 mt-10 mx-auto justify-between items-center'>
            <div className='w-full'>
                <h2 className='xl:text-5xl font-MorabbaBold pb-3 lg:text-3xl'>درباره ی سایت ما بیشتر بدانید</h2>
                <p className='leading-[35px] my-5 2xl:text-[16px] lg:text-[14px] md:text-[12px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
            <div className='grid grid-cols-2 my-10 [&>*]:text-green-900 [&>*]:gap-10'>
                <div className="flex flex-col [&>*]:inline-flex relative">
                    <span className="before:content-[''] before:absolute before:bg-slate-500 mr-8 before:top-3 before:w-5 before:h-5">هر روز هفته پاسخگو هستیم</span>
                    <span className="before:content-[''] before:absolute before:bg-slate-500 mr-8 before:bottom-3 before:w-5 before:h-5">با قیمت مناسب خرید کن</span>
                </div>
                <div className='flex flex-col relative'>
                    <span className="before:content-[''] before:absolute before:bg-slate-500 mr-8 before:top-3 before:w-5 before:h-5">درب منزل هزینه رو پرداخت کن</span>
                    <span className="before:content-[''] before:absolute before:bg-slate-500 mr-8 before:bottom-3 before:w-5 before:h-5">هر روز هفته پاسخگو هستیم</span>
                </div>
            </div>
                <div className='flex gap-10'>
                    <button>اطلاعات بیشتر</button>
                    <button className='btn'>مشهاده محصولات</button>
                </div>
            </div>    
            <div className='md:mb-0 mb-10 lg:w-[60%] md:w-[50%] w-full'>
                <img className='w-[50rem]' src='https://halochin.ir/Decorative-shop/wp-content/uploads/2023/10/home-hero.png' alt="" />
            </div>
        </div>
    </>
  )
}
