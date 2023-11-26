import React, { createContext, useState } from 'react'

import image1 from '../photo/1.jpg'
import image2 from '../photo/2.jpg'
import image3 from '../photo/3.jpg'
import image4 from '../photo/4.png'
import image5 from '../photo/5.png'

export const CategoryContext=createContext()
export default function CategoryContextProvider({children}) {
    const [data,setData]=useState({
        'divar':[{id:1,name:'mojasame',price:235000,img:image1},{id:2,name:'sofal',price:275000,img:image2},{id:3,name:'neon',price:778000,img:image3},{id:4,name:'led',price:755000,img:image4}],
        'choob':[{id:1,name:'service1',price:35000,img:image2},{id:2,name:'service2',price:775000,img:image3},{id:3,name:'service3',price:835000,img:image4},{id:4,name:'service4',price:755000,img:image5}],
        'chiken':[{id:1,name:'mag1',price:235000,img:image1},{id:2,name:'mag2',price:275000,img:image2},{id:3,name:'mag3',price:785000,img:image3},{id:4,name:'mag4',price:755000,img:image4}],
        'konsool':[{id:1,name:'desk1',price:235000,img:image1},{id:2,name:'desk2',price:275000,img:image5},{id:3,name:'desk3',price:735000,img:image2},{id:4,name:'desk4',price:755000,img:image3}],
        'dekor':[{id:1,name:'shelf1',price:235000,img:image5},{id:2,name:'shelf2',price:275000,img:image4},{id:3,name:'shelf3',price:735000,img:image1},{id:4,name:'shelf4',price:755000,img:image2}],
    })
  return (
    <>
    <CategoryContext.Provider value={data}>
        {children}
    </CategoryContext.Provider>
    </>
  )
}
