import React from "react";
import { isAuthenticated } from "../Components/auth";
// import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";

const UserDashboard = () => {
  const { user } = isAuthenticated();
  return (
    <>
      {/* <Navbar /> */}
      <h2>UserDashboard</h2>
      <h3>{user.email}</h3>
      {/* <Footer /> */}
    </>
  );
};

export default UserDashboard;
