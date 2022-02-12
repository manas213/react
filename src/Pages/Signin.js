import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="conainer-sm w-50 mx-auto mt-5 shadow-lg p-5">
        <main className="form-signin">
          <form>
            <div className="text-center">
            <img
              className="mb-4"
              src="logo192.png"
              alt=""
              width="80"
              height="72"
            />
            </div>
            
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            Do not have an account? <Link to="/signup">Register</Link>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
