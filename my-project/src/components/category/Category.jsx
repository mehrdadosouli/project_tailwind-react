import React, { useContext, useEffect, useReducer, useState } from 'react'
import { CategoryContext } from '../../context/CategoryContextProvider'
import ContentCategory from './ContentCategory'
import image1 from '../../photo/1.jpg'
import image2 from '../../photo/2.jpg'
import image3 from '../../photo/3.jpg'
import image4 from '../../photo/4.png'
const initial={
  divar:[],
  choob:[],
  chiken:[],
  dekor:[],
  konsool:[],
  defaults:[{id:1,name:'mojasame',price:235000,img:image1},{id:2,name:'sofal',price:275000,img:image2},
  {id:3,name:'neon',price:778000,img:image3},{id:4,name:'led',price:755000,img:image4}],
  
}

const reducer=(state,action)=>{

  switch (action.type) {
    case 'divar':
      let divar=[...action.payload]
      return {...state,divar:divar,defaults:[]};
    case 'choob':
      let choob=[...action.payload]
      return {...state,divar:choob,defaults:[]};
    case 'chiken':
      let chiken=[...action.payload]
      return {...state,divar:chiken,defaults:[]};
    case 'konsool':
      let konsool=[...action.payload]
      return {...state,divar:konsool,defaults:[]};
    case 'dekor':
      let dekor=[...action.payload]
      return {...state,divar:dekor,defaults:[]};
    case 'defaults':
      return {...state};
  
    default:
      state;
  }
}

export default function Category() {
  const [loadCategory,setloadCategor]=useState(true)
  const [state,dispatch]=useReducer(reducer,initial)
  const categoryData=useContext(CategoryContext)
  useEffect(()=>{
    loadCategory && dispatch({type:'defaults'})
  },[loadCategory])
  
  return (
    
    <>
    <div className='flex [&>*]:hover:cursor-pointer gap-5 py-8 w-10/12 lg:w-[64%] xl:w-[50%] mr-[9%] my-10 lg:[&>*]:p-8 [&>*]:p-4 flex-wrap [&>*]:rounded-2xl [&>*]:bg-white bg-[#F5F9FF] justify-center'>
       
        <span onClick={()=>{dispatch({type:'divar',payload:categoryData.divar}),setloadCategor(false)}}>دیوار کوب</span>
        <span onClick={()=>{dispatch({type:'choob',payload:categoryData.choob}),setloadCategor(false)}}>لوازم چوبی</span>
        <span onClick={()=>{dispatch({type:'chiken',payload:categoryData.chiken}),setloadCategor(false)}}>لوازم آشپزخانه</span>
        <span onClick={()=>{dispatch({type:'konsool',payload:categoryData.konsool}),setloadCategor(false)}}>میز و کنسول</span>
        <span onClick={()=>{dispatch({type:'dekor',payload:categoryData.dekor}),setloadCategor(false)}}>شلف و دکور</span>
      </div>
      
    <div className='flex w-10/12 justify-between items-center mx-auto py-10 gap-10'>    
        <ContentCategory data={state} />
    </div>
      
    </>
  )
}
