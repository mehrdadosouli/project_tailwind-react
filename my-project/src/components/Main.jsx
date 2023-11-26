import React from 'react'
import {Routes,Route} from 'react-router-dom'
import TopMain from "./topMain/TopMain";
import Category from "./category/Category";
// import Vall from "./category/Vall";
// import Shop from "./category/shopping/Shop";
// import Contact_us from "./category/contact/Contact_us";
// import Abute from "./category/aboute/Abouteus";
// import Weblog from "./category/weblog/Weblog";
// import Choob from "./category/Choob";
// import Kitchen from "./category/Kitchen";
// import Dekor from "./category/Dekor";
// import Desk from "./category/Desk";
export default function Main() {
  return (
    <>
      <div className="w-full h-full bg-base">
      <TopMain />
      <Category />
        

       
      </div>
    </>
  )
}
