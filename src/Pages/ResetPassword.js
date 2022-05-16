import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { resetPassword } from "../Components/auth";

const ResetPassword = () => {
  const params = useParams();
  const token = params.token;
  // console.log(token)

  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const passwordReset = (e) => {
    setError("");
    setSuccess(false);
    e.preventDefault();
    resetPassword(token, email, newPassword)
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
          Password has been reset successfully.
        </div>
      );
    }
  };

  return (
    <>
      {showError()}
      {showSuccess()}
      <div className="container w-50 my-5">
        {!success && (
          <>
          <h3>ResetPassword</h3>
            <label>Email:</label>
            <input
              type={"text"}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>New Password:</label>
            <input
              type={"text"}
              className="form-control"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button className="btn btn-warning" onClick={passwordReset}>
              Reset Password
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ResetPassword;
