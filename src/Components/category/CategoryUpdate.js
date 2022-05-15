import React, { useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar";
import Navbar from "../Navbar";
import { findCategory, updateCategory } from "./categoryApi";
import { useParams } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { useNavigate } from "react-router-dom";

const CategoryUpdate = () => {
  const params = useParams();
  const { token } = isAuthenticated();

  const [old_category, setOLDCategory] = useState("");
  const [new_category, setNEWCategory] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    findCategory(params.id)
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setOLDCategory(data.category_name);
        }
      })
      .catch((error) => console.log(error));
  }, [success]);

  const update = (e) => {
    e.preventDefault();
    // const category_name = new_category
    // updateCategory(params.id,{category_name},token)
    setSuccess(false);
    updateCategory(params.id, new_category, token)
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setSuccess(true);
        }
      })
      .catch((err) => console.log(err));
  };
  // to show error
  const showError = () => {
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  };

  // to show success
  const showSuccess = () => {
    if (success) {
      return <div className="alert alert-success">Category Updated</div>;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid custom-row">
        <div className="row ">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h3 className="my-3 text-center">Categories</h3>
            <div className="container">
              {showError()}
              {showSuccess()}
              <div className="form-floating">
                <input
                  type={"text"}
                  className="form-control disabled"
                  value={old_category}
                  readOnly
                />
                <label>Previous Category Name</label>
              </div>

              {success ? (
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/admin/category")}
                >
                  Go back
                </button>
              ) : (
                <>
                  <div className="form-floating">
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="enter category_name"
                      onChange={(e) => setNEWCategory(e.target.value)}
                    />
                    <label>New Category Name</label>
                  </div>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => update(e)}
                  >
                    UPDATE
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdate;
