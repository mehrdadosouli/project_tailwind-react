import React from "react";
import Header from "./components/header/Header";
import {Routes,Route} from 'react-router-dom'
function App() {
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
      </div>
    </>
  );
}

export default App;
