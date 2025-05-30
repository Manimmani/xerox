import React from "react";
import { Routes, Route} from "react-router-dom";
import PrintoutFormat from "./ui/printout";
// import FrontPage from "./ui/Frontpage";
import LoginPage from "./ui/LoginPage";
import Categories from "./ui/categories";
import Lamination from "./ui/Lamination";
import SpiralBinding from "./ui/Spiral";
import PhotoCopy from "./ui/PhotoCopy";
import AdminLogin from "./ui/AdminLogin";
import FrontPage2 from "./ui/Frontpage2";
import { Signup } from "./ui/Signup";
import Admin_dash from "./ui/Admin_dash"
import Manage_orders from "./ui/Manage_orders";



const App = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage2/>} />
      {/* <Route path="/" element={<FrontPage/>} /> */}
      <Route path="/category" element={<Categories/>} />
      <Route path="/Printout" element={<PrintoutFormat />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/lamination" element={<Lamination/>} />
      <Route path="/Spiral" element={<SpiralBinding/>} />
      <Route path="/PhotoCopy" element={<PhotoCopy/>} />
      <Route path="/admin" element={<AdminLogin/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dash_board" element={<Admin_dash/>}/>
      <Route path="/manage-orders" element={<Manage_orders/>}/>
      
    </Routes>
    // </BrowserRouter>
  
  );
};

export default App;
