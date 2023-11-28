import React,{useEffect,useState} from "react";
import Main from './components/Main'
import Hamburger from "./components/header/Hamburger";
import {Routes,Route} from 'react-router-dom'
function App() {
  const [show,setSHow]=useState(true)


  window.addEventListener('resize',(e)=>{
    if(window.innerWidth > '992'){
      setSHow(true)
    }else{
      setSHow(false)
    }
  })

  useEffect(()=>{
    if(window.innerWidth > '992'){
      setSHow(true)
    }else{
      setSHow(false)
    }
    
},[])

  return (
    <>
      <div className="w-full h-full bg-base">
    {show ?
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/فروشگاه" element={<Main />} />
          <Route path="/وبلاگ" element={<Main />} />
          <Route path="/درباره ما" element={<Main />} />
          <Route path="/تماس با ما" element={<Main />} />
        </Routes>
      :
      <>
        <Hamburger />
        <Main />      
      </>
    }
      </div>
    </>
  );
}

export default App;
