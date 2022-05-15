import React, { useState } from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import { signup } from "../Components/auth";

const Signup = () => {
  // to store values for sending in assUser
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  //destructuring
  const {
    first_name,
    last_name,
    date_of_birth,
    gender,
    email,
    password,
    error,
    success,
  } = values;
  // handleChange to store values in useState
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
    console.log(name + ":" + event.target.value);
  };
  // submit form
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents default action of button
    setValues({ ...values, error: "false" });
    signup(values)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values, //rest operator -> ...
            first_name: "",
            last_name: "",
            date_of_birth: "",
            gender: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((error) => console.log("Database error"));
  };
  // to show error
  const showError = () => {
    if (error) {
      console.log(error);
      return (
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
      );
    }
  };

  // to show success/user is added
  const showSuccess = () => {
    if (success) {
      return (
        <div className="alert alert-success">
          New user added. Please verify your account.
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      {showError()}
      {showSuccess()}
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          cpassword: "",
        }}
        validationSchema={Yup.object({
          first_name: Yup.string()
            .required("First name is required")
            .min(2, "First name should be atleast 2 characters")
            .max(30, "First name must not be more than 30 characters"),

          last_name: Yup.string()
            .required("Last name is required")
            .min(2, "Last name should be atleast 2 characters")
            .max(30, "Last name must not be more than 30 characters"),

          email: Yup.string()
            .required("Email is required")
            .email("Invalid email format. example: example@gmail.com"),

          password: Yup.string()
            .required("Password is required")
            .matches(
              /([?=.*a-zA-Z])(?=.*\d)(?=.*[!@#$%^]){8,30}/,
              "Password must contain one uppercase, one lowercase, one number and one special character and must be atleast 8 characters long and at most 30 characters"
            ),

          cpassword: Yup.string()
            .required("Confirmation password is required")
            .oneOf(
              [Yup.ref("password")],
              "Password and confirm password does not match"
            ),
        })}
      >
        <div className="container-sm w-50 mx-auto mt-5 shadow-lg p-5">
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
              <h1 className="h3 mb-3 fw-normal">Register</h1>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingfirstname"
                  placeholder="first name here"
                  name="first_name"
                  onChange={handleChange("first_name")}
                  value={first_name}
                />
                <label htmlFor="floatingfirstname">First Name</label>
                <ErrorMessage name="first_name">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatinglastname"
                  placeholder="last name here"
                  name="last_name"
                  onChange={handleChange("last_name")}
                  value={last_name}
                />
                <label htmlFor="floatinglastname">Last Name</label>
                <ErrorMessage name="last_name">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  onChange={handleChange("email")}
                  value={email}
                />
                <label htmlFor="floatingInput">Email address</label>
                <ErrorMessage name="email">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="floatingdate"
                  placeholder="date of birth here"
                  onChange={handleChange("date_of_birth")}
                  value={date_of_birth}
                />
                <label htmlFor="floatingdate">Date of Birth</label>
              </div>
              <label className="form-control">
                Gender:
                <div className="d-flex">
                  <div class="form-check ms-5">
                    <input
                      class="form-check-input mt-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      onChange={handleChange("gender")}
                      value="Male"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input mt-1"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      // checked
                      onChange={handleChange("gender")}
                      value="Female"
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
              </label>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange("password")}
                  value={password}
                />
                <label htmlFor="floatingPassword">Password</label>
                <ErrorMessage name="password">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingcPassword"
                  placeholder="Password"
                  name="cpassword"
                />
                <label htmlFor="floatingcPassword">Confirm Password</label>
                <ErrorMessage name="cpassword">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> I accept the
                  terms and conditions.
                </label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </button>
              Already have an account? <Link to="/signin">Signin</Link>
              <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
          </main>
        </div>
      </Formik>
      {/* <Footer /> */}
    </>
  );
};

export default Signup;
