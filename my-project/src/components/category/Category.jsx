import React, { useContext, useReducer } from 'react'
import { CategoryContext } from '../../context/CategoryContextProvider'
import ContentCategory from './ContentCategory'
const initial={
  divar:[],
  choob:[],
  chiken:[],
  dekor:[],
  konsool:[]
}

const reducer=(state,action)=>{

  switch (action.type) {
    case 'divar':
      let divar=[...action.payload]
      return {...state,divar:divar};
    case 'choob':
      let choob=[...action.payload]
      return {...state,divar:choob};
    case 'chiken':
      let chiken=[...action.payload]
      return {...state,divar:chiken};
    case 'konsool':
      let konsool=[...action.payload]
      return {...state,divar:konsool};
    case 'dekor':
      let dekor=[...action.payload]
      return {...state,divar:dekor};
  
    default:
      state;
  }
}

export default function Category() {
  const [state,dispatch]=useReducer(reducer,initial)
  const categoryData=useContext(CategoryContext)
  console.log(categoryData);
  return (
    
    <>
    <div className='flex [&>*]:hover:cursor-pointer gap-5 py-8 w-10/12 lg:w-[64%] xl:w-[50%] mr-[9%] my-10 lg:[&>*]:p-8 [&>*]:p-4 flex-wrap [&>*]:rounded-2xl [&>*]:bg-white bg-[#F5F9FF] justify-center'>
        <span onClick={()=>dispatch({type:'divar',payload:categoryData.divar})}>دیوار کوب</span>
        <span onClick={()=>dispatch({type:'choob',payload:categoryData.choob})}>لوازم چوبی</span>
        <span onClick={()=>dispatch({type:'chiken',payload:categoryData.chiken})}>لوازم آشپزخانه</span>
        <span onClick={()=>dispatch({type:'konsool',payload:categoryData.konsool})}>میز و کنسول</span>
        <span onClick={()=>dispatch({type:'dekor',payload:categoryData.dekor})}>شلف و دکور</span>
      </div>
      
    <div className='flex w-10/12 justify-between items-center mx-auto py-10 gap-10'>
        <ContentCategory data={state} />
    </div>
      
    </>
  )
}
