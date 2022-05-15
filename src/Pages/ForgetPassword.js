import React, { useState, useEffect } from "react";
import { forgetPassword } from "../Components/auth";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const clickSubmit = (e) => {
      setError("")
      setSuccess(false)
    e.preventDefault();
    forgetPassword(email)
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const showError = () => {
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  };

  const showSuccess = () => {
    if (success) {
      return (
        <div className="alert alert-success">
          Password reset link has been sent to your email
        </div>
      );
    }
  };

  return (
    <>
      {showError()}
      {showSuccess()}
      {!success && (
        <div className="container w-50 mx-auto my-5">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type={"email"}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="btn btn-warning form-control"
            onClick={clickSubmit}
          >
            Forget Password
          </button>
        </div>
      )}
    </>
  );
};

export default ForgetPassword;
