import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from './App';
// import First from './Pages/First'
// import Second from './Pages/Second'
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Data from "./Hooks/Data";
import FetchData from "./Hooks/FetchData";
import Main from "./Hooks/Main";
import Confirm from "./Pages/Confirm";
import AdminRoute from "./Components/Routes/AdminRoute";
import AdminDashboard from "./Pages/AdminDashboard";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import UserDashboard from "./Pages/UserDashboard";
import Category from "./Components/category/Category";
import CategoryUpdate from "./Components/category/CategoryUpdate";
import AddProduct from "./Components/product/AddProduct";
import Products_in_AdminPage from "./Components/product/Products_in_AdminPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Product_Details from "./Components/product/Product_Details";
import Deals from "./Pages/Deals";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";

const MyRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<App/>} />
                <Route path="/first" element={<First />} />
                <Route path="/second" element={<Second />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email/confirmation/:token" element={<Confirm />} />
        <Route path="/product/details/:id" element={<Product_Details />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        <Route path="/" element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/category" element={<Category />} />
          <Route
            path="/admin/categoryupdate/:id"
            element={<CategoryUpdate />}
          />
          <Route path="/admin/product/add" element={<AddProduct />} />
          <Route path="/admin/products" element={<Products_in_AdminPage />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/user/profile" element={<UserDashboard />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* hooks */}
        <Route path="/showdata" element={<Data />} />
        <Route path="/fetchdata" element={<FetchData />} />
        <Route path="/text" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MyRoute;
