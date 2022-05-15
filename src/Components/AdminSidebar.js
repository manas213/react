import React from "react";
import "./adminsidebar.css";
import { isAuthenticated } from "./auth";
import { signout } from "./auth";

const AdminSidebar = () => {
  const { user } = isAuthenticated();
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark custom-sidebar"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Dashboard</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="/admin/category" className="nav-link text-white">
              Category
            </a>
          </li>
          <li>
            <a href="/admin/products" className="nav-link text-white">
              Products
            </a>
          </li>
          <li>
            <a href="/admin/product/add" className="nav-link text-white">
              Add Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Order
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Users
            </a>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{user.email}</strong>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/"
                onClick={() => {
                  signout()
                    .then((data) => {
                      if (data.error) {
                        console.log(data.error);
                      } else {
                        return;
                      }
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
