import React from "react";
import { isAuthenticated } from "../Components/auth";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AdminSidebar from "../Components/AdminSidebar";

const AdminDashboard = () => {
  const { user } = isAuthenticated();
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid custom-row">
        <div className="row">
          <div className="col md-3">
            <AdminSidebar />
          </div>
          <div className="col md-9"></div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AdminDashboard;
