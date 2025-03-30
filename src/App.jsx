import React from "react";
import { Routes, Route,Router } from "react-router-dom";
import PrintoutFormat from "./ui/printout";

import FrontPage from "./ui/Frontpage";
import Login from "./ui/loginpage";
import Categories from "./ui/categories";
import Lamination from "./ui/Lamination";
import SpiralBinding from "./ui/Spiral";
import PhotoCopy from "./ui/PhotoCopy";
import AdminLogin from "./ui/AdminLogin";
import FrontPage2 from "./ui/Frontpage2";



const App = () => {
  return (
      <Routes>
        <Route path="/" element={<FrontPage2/>} />
      {/* <Route path="/" element={<FrontPage/>} /> */}
      <Route path="/category" element={<Categories/>} />
      <Route path="/Printout" element={<PrintoutFormat />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/lamination" element={<Lamination/>} />
      <Route path="/Spiral" element={<SpiralBinding/>} />
      <Route path="/PhotoCopy" element={<PhotoCopy/>} />
      <Route path="/admin" element={<AdminLogin/>} />

    </Routes>
  
  );
};

export default App;
