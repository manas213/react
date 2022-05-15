import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Confirm = () => {
  let url_parameters = useParams(); //to get parameters from url

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/confirmation/${url_parameters.token}`, {
      method: "POST",
    })
      .then(res => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          return setError(data.error);
        } else {
          return setSuccess(true);
        }
      })
      .catch((error) => console.log(error));
  }, [url_parameters]);

  const showError = () => {
    if (error) {
      // setSuccess(false);
      console.log(error);
      return <div className="alert alert-danger">{error}</div>;
    }
  };

  const showSuccess = () => {
    if (success) {
      return (
        <div className="alert alert-success">
          Account verified successfully. Please login to continue.
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />
      {showError()}
      {showSuccess()}
      <Footer />
    </>
  );
};

export default Confirm;
