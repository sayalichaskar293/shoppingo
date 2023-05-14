
import Home from "./pages/Home.js";
import ProductEach from "./pages/ProductEach.js";
import ProductList from "./pages/ProductList.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Cart from "./pages/Cart.js";
import { useState } from "react";
import {Routes, Route, redirect} from "react-router-dom"



function App() {
  const user= true;
  const {theme, setTheme}= useState({mode: "light"})
  return (
        <>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/cart" element={<Cart></Cart>}/>
          <Route path="/login" element={<Login></Login>}/>
          {/* <Route path="/login">{user? redirect("/"): <Login/> }</Route> */}
          <Route path="/signup" element={<Signup></Signup>}/>
          <Route path="/producteach/:id" element={<ProductEach></ProductEach>}/>
          <Route path="/productlist/:category" element={<ProductList></ProductList>}/>
        </Routes>
       
   {/* <ProductList></ProductList> */}
   {/* <ProductEach></ProductEach> */}
   {/* <Login></Login> */}
   {/* <Signup></Signup> */}
{/* <Cart></Cart> */}
</>

    
  );
}

export default App;
