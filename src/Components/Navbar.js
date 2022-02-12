import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="row py-2 bg-dark">
        <div className="col-md-3">
          <Link className="navbar-brand fs-3 text-success text-center" to="/">
            My Store
          </Link>
        </div>
        <div className="col-md-6">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="col-md-3 d-flex justify-content-evenly">
          <Link to="/signup">
            <i className="bi bi-person-plus-fill fs-3 text-secondary"></i>
          </Link>
          <Link to="/signin">
            <i className="bi bi-box-arrow-in-right fs-3 text-secondary"></i>
          </Link>
          <Link to="/cart">
            <i className="bi bi-cart fs-3 text-secondary"></i>
          </Link>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" aria-current="page" to="#">
                  Deals
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="#">
                  Customer Sevice
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
