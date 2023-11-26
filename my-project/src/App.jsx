import React from "react";
import {Routes,Route} from 'react-router-dom'
import Main from "./components/Main";

import Vall from "./components/category/Vall";
import Shop from "./components/category/shopping/Shop";
import Contact_us from "./components/category/contact/Contact_us";
import Abute from "./components/category/aboute/Abouteus";
import Weblog from "./components/category/weblog/Weblog";
import Choob from "./components/category/Choob";
import Kitchen from "./components/category/Kitchen";
import Dekor from "./components/category/Dekor";
import Desk from "./components/category/Desk";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="فروشگاه" element={<Shop />} />
          <Route path="وبلاگ" element={<Weblog />} />
          <Route path="درباره ما" element={<Abute />} />
          <Route path="تماس با ما" element={<Contact_us />} />
          <Route path="vall" element={<Vall />} />
          <Route path="choob" element={<Choob />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="desk" element={<Desk />} />
          <Route path="dekor" element={<Dekor />} />
      </Routes>
    </>
  );
}

export default App;
