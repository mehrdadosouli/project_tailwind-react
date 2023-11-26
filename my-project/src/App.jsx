import React from "react";
import Header from "./components/header/Header";
import TopMain from "./components/topMain/TopMain";
import {Routes,Route} from 'react-router-dom'
function App() {
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
      <div className="w-full h-full bg-base">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/فروشگاه" element={<Header />} />
          <Route path="/وبلاگ" element={<Header />} />
          <Route path="/درباره ما" element={<Header />} />
          <Route path="/تماس با ما" element={<Header />} />
        </Routes>
        <TopMain />
      </div>
    </>
  );
}

export default App;
